const go6Units = [
  {
    title: 'School Days', zh: '校园生活', words: [
      ['scarf','围巾','🧣'],['mittens','连指手套','🧤'],['gloves','手套','🧤'],['glasses','眼镜','👓'],['belt','腰带','👖'],['watch','手表','⌚'],
      ['watering the plants','给植物浇水','🪴'],['feeding the fish','给鱼喂食','🐟'],['writing on the board','在黑板上写字','🧑‍🏫'],['talking to the teacher','和老师交谈','🗣️'],['reading a textbook','读课本','📘'],['writing an essay','写作文','✍️'],
      ['talking on his cell phone','他在打手机','📱'],['reading a magazine','读杂志','📖'],['walking in the park','在公园散步','🚶'],['drinking some water','喝一些水','🥤'],['playing a game','玩游戏','🎲'],['sitting on a bench','坐在长椅上','🪑'],
      
    ]
  },
  {
    title: 'At the Aquarium', zh: '在水族馆', words: [
      ['scary','吓人的','👻'],
      ['aquarium','水族馆','🐠'],['exhibit','展览','🖼️'],['shark','鲨鱼','🦈'],['octopus','章鱼','🐙'],['jellyfish','水母','🪼'],['sea turtle','海龟','🐢'],['squid','鱿鱼','🦑'],['ride','乘坐；游乐设施','🎡'],['pedal boat','脚踏船','🚣'],
      
    ]
  },
  {
    title: 'Going Shopping', zh: '去购物', words: [
      ['bracelet','手链','📿'],['a box of chocolates','一盒巧克力','🍫'],['cookbook','烹饪书','📗'],['DVD','DVD光盘','📀'],['book','书','📘'],['video camera','摄像机','📹'],['necklace','项链','📿'],['ring','戒指','💍'],['stuffed toy','毛绒玩具','🧸'],['earrings','耳环','💎'],['golf clubs','高尔夫球杆','🏌️'],
      ['bought a drink','买了一杯饮料','🥤'],['made a bracelet','做了一条手链','📿'],['sent a picture','发了一张照片','📷'],['gave a present','送了一份礼物','🎁'],['showed a T-shirt','展示了一件T恤','👕'],
    ]
  },
  {
    title: 'Around Town', zh: '在城镇里', words: [
      ['ice cream shop','冰淇淋店','🍦'],['bakery','面包店','🥐'],['sports store','体育用品店','🏬'],['music store','音乐商店','🎸'],['clothing store','服装店','👕'],['food court','美食广场','🍽️'],['bookstore','书店','📚'],['game store','游戏商店','🎮'],
      
      ['bank','银行','🏦'],['beauty shop','美容店','💇'],['grocery store','杂货店','🛒'],['restaurant','餐馆','🍽️'],['gift shop','礼品店','🎁'],['library','图书馆','📚']
    ]
  },
  {
    title: 'Explore the World', zh: '探索世界', words: [
      ['Australia','澳大利亚','🇦🇺'],['Vietnam','越南','🇻🇳'],['Thailand','泰国','🇹🇭'],['Mexico','墨西哥','🇲🇽'],['Brazil','巴西','🇧🇷'],['France','法国','🇫🇷'],['Italy','意大利','🇮🇹'],
      ['black beans','黑豆','🫘'],['croissants','羊角面包','🥐'],['spaghetti','意大利面','🍝'],['rice noodles','米粉','🍜'],['burritos','墨西哥卷饼','🌯'],['meat pies','肉馅饼','🥧'],
    ]
  },
  {
    title: 'Doing Things', zh: '正在做的事', words: [
      ['cleaned his desk','他整理了书桌','🧹'],['washed her hands','她洗了手','🧼'],['watched the movie','看了电影','🎬'],['walked the dog','遛了狗','🐕'],['fed the cat','喂了猫','🐈'],
      ['studied English','学了英语','🔤'],['lived in New York','住在纽约','🗽'],['taught French','教了法语','🇫🇷'],['played soccer','踢了足球','⚽'],['had a cat','养了一只猫','🐈'],
      ['talking on the phone','正在打电话','📞'],['visiting Bangkok','正在游览曼谷','🏙️'],['riding her bicycle','她正在骑自行车','🚴'],['cleaning his room','他正在打扫房间','🧹'],['waiting','等待','⏳'],['playing baseball','正在打棒球','⚾'],
    ]
  },
  {
    title: 'About Me', zh: '关于我', words: [
      ['shy','害羞的','😊'],['friendly','友好的','🤝'],
      ['learn how to walk','学会走路','🚶'],['learn how to write my name','学会写自己的名字','✍️'],['learn how to read','学会阅读','📖'],['learn how to ride a bike','学会骑自行车','🚲'],['learn how to ice skate','学会滑冰','⛸️'],['learn how to tie my shoes','学会系鞋带','👟'],
      ['fly a helicopter','驾驶直升机','🚁'],['run a marathon','跑马拉松','🏃'],['visit London','参观伦敦','🇬🇧'],['speak more languages','说更多语言','🗣️'],['play golf','打高尔夫球','⛳'],['drive a car','开车','🚗'],['act in a play','在戏剧中表演','🎭'],['conduct an orchestra','指挥管弦乐队','🎼'],
      
    ]
  },
  {
    title: 'In the Future', zh: '未来', words: [
      ['the Amazon jungle','亚马逊丛林','🌴'],['Mt. Everest','珠穆朗玛峰','🏔️'],['the bottom of the ocean','海底','🌊'],['the pyramids of Egypt','埃及金字塔','🔺'],['the moon','月球','🌙'],['the equator','赤道','🌍'],['Antarctica','南极洲','🐧'],['Mars','火星','🔴'],
      ['meet a TV star','见一位电视明星','📺'],['meet a sports star','见一位体育明星','🏅'],['buy a pony','买一匹小马','🐴'],['buy a motorbike','买一辆摩托车','🏍️'],['go kayaking','去划皮艇','🛶'],['go skydiving','去跳伞','🪂'],
    ]
  }
].map(unit => ({
  ...unit,
  words: unit.words.map(([word, zh, emoji, group]) => ({
    word, zh, emoji, group: group || '教材核心'
  }))
}));
