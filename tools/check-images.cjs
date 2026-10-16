#!/usr/bin/env node
// Checks that every vocabulary word resolves to an existing photo in assets/words/.
//
//   node tools/check-images.cjs            exit 1 if an approved book (Begin 1-2, Go 1-2) has a missing photo
//   node tools/check-images.cjs --strict   exit 1 if ANY book has a missing photo
//   node tools/check-images.cjs --list     also print every missing word
//
// Books without a photo fall back to their emoji in the app, so Let's Go 3-6 are
// reported but do not fail the default run until their photos exist.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const args = new Set(process.argv.slice(2));
const strict = args.has('--strict');
const list = args.has('--list');

const BOOKS = [
  ['beginUnits', "Let's Begin 1", true],
  ['begin2Units', "Let's Begin 2", true],
  ['goUnits', "Let's Go 1", true],
  ['go2Units', "Let's Go 2", true],
  ['go3Units', "Let's Go 3", false],
  ['go4Units', "Let's Go 4", false],
  ['go5Units', "Let's Go 5", false],
  ['go6Units', "Let's Go 6", false],
];

function read(file) {
  return fs.readFileSync(path.join(root, file), 'utf8');
}

function slice(text, from, to) {
  const a = text.indexOf(from);
  const b = text.indexOf(to);
  if (a < 0 || b < 0 || b < a) {
    throw new Error(`script.js no longer contains "${from}" ... "${to}"; update tools/check-images.cjs`);
  }
  return text.slice(a, b);
}

// Load the real unit data and the real imagePath() so this check cannot drift from the app.
const main = read('script.js');
const dataFiles = fs.readdirSync(root).filter((f) => /^book\d+-data\.js$/.test(f)).sort();
const source = [
  ...dataFiles.map(read),
  slice(main, 'const goUnits', 'let book='),
  slice(main, 'const photoAliases=', 'function practiceQuestionCount'),
  `this.__result = { imagePath, ${BOOKS.map(([k]) => `${k}: typeof ${k} === 'undefined' ? null : ${k}`).join(', ')} };`,
].join('\n');
const context = {};
vm.createContext(context);
vm.runInContext(source, context);
const { imagePath } = context.__result;

const photoDir = path.join(root, 'assets', 'words');
const files = new Set(fs.readdirSync(photoDir));
const used = new Set();
let failed = false;

console.log(`${files.size} files in assets/words\n`);
for (const [key, label, approved] of BOOKS) {
  const units = context.__result[key];
  if (!units) {
    console.log(`${label.padEnd(14)} data not found`);
    failed = true;
    continue;
  }
  const words = [...new Set(units.flatMap((u) => u.words.map((w) => w.word)))];
  const missing = words.filter((w) => {
    const file = path.basename(imagePath(w));
    used.add(file);
    return !files.has(file);
  });
  const status = missing.length === 0 ? 'OK' : approved || strict ? 'FAIL' : 'emoji fallback';
  if (missing.length && (approved || strict)) failed = true;
  console.log(`${label.padEnd(14)} ${String(words.length).padStart(4)} words  ${String(missing.length).padStart(4)} missing  ${status}`);
  if (list && missing.length) console.log(`    ${missing.join(', ')}`);
}

const unused = [...files].filter((f) => !used.has(f));
console.log(`\nunused photos: ${unused.length ? unused.join(', ') : 'none'}`);
if (failed) {
  console.log('\nFAILED: a book that must have photos has missing images.');
  process.exit(1);
}
