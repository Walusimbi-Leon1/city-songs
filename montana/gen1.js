const fs = require('fs'), path = require('path');
const outDir = __dirname;
function slug(n){return n.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/-+$/,'');}
function w(city,g,m,s,i,v1,p,c,v2,b,f,o){
  const nm=city, sname=slug(nm);
  const md=`# ${nm}, Montana\n*A song celebrating the spirit of ${nm}*\n\n---\n\n**Genre:** ${g}\n**Mood:** ${m}\n**Suno Tags:** ${s}\n\n[Intro tag]\n${i}\n\n[Verse 1]\n${v1}\n\n[Pre-Chorus]\n${p}\n\n[Chorus]\n${c}\n\n[Verse 2]\n${v2}\n\n[Pre-Chorus]\n${p}\n\n[Chorus]\n${c}\n\n[Bridge]\n${b}\n\n[Final Chorus]\n${f}\n\n[Outro]\n${o}\n\n---\n\n**City:** ${nm}\n**State:** Montana\n**Generated for:** [City Songs Project](https://walusimbi-leon1.github.io/city-songs/)\n`;
  fs.writeFileSync(path.join(outDir,sname+'.md'),md);
  console.log('OK: '+nm);
}
// Already done: Billings, Missoula

w("Great Falls","Country","Proud, Spirited, Heartfelt","[Style of Music: heartfelt country, steel guitar, group vocals, Montana pride, western heritage]",
"Great Falls—where the Missouri River roars and history lives!",
"Giant Springs pouring water from the earth so deep,\nLewis and Clark's portage where their tired legs would sleep.\nMalmstrom Air Force standing guard across the plains,\nCharles Russell painted cowboys through the wind and rain.",
"Black Eagle Falls thundering, the Electric City's call,\nGreat Falls, Montana—we stand strong and tall!",
"Great Falls, Great Falls, electric through and through,\nThe Missouri River carries our story, old and new.\nCowboy art and waterfall power in our veins,\nGreat Falls, Montana—we'll rise again!",
"C.M. Russell Museum keeping Western spirit strong,\nSacagawea landing at the confluence below.\nFrom Rainbow Falls to Giant Springs—watch our city grow,\nElectric City lighting up the evening glow.",
"Five waterfalls cascading like a symphony of stone,\nThe Russell Riders keeping cowboy legends known.\nFrom Fort Benton upstream where the steamboats used to land,\nGreat Falls keeps the frontier spirit close at hand!",
"Great Falls, Great Falls, electric through and through,\nThe Missouri River carries our story, old and new.\nFive falls of fury, hearts that never wane,\nGreat Falls, Montana—we'll rise again!",
"Waterfalls and cowboys, under Big Sky blue,\nGreat Falls forever—electric and true."
);

w("Bozeman","Indie Rock","Adventurous, Optimistic, Bold","[Style of Music: indie rock, upbeat energy, adventurous spirit, mountain-town vibe, optimistic vocals]",
"Bozeman—where Gallatin Valley meets the summit of dreams!",
"Montana State Bobcats roaring from the field,\nBridger Bowl powder days that make the spirit yield.\nMuseum of the Rockies with dinosaurs and stars,\nGallatin Valley fairgrounds beneath the western scars.",
"Between Bridger and the Gallatin range, we're alive,\nBozeman, Montana—we thrive, we thrive!",
"Bozeman, Bozeman, summit of the crown,\nGallatin Valley diamonds never letting us down.\nTech and trails and education leading the way,\nBozeman, Montana—we own the day!",
"Danforth Peace Chapel where the quiet voices pray,\nDowntown Main Street glowing at the end of day.\nHyalite Reservoir reflecting mountain light,\nBozeman Powder Company keeping winters bright.",
"From Gallatin Field to Sourdough Ridge,\nBozeman built on courage, wonder, and knowledge bridge.\nMeriwether Lewis found this valley on the expedition trail,\nBozeman lives forever—strength will never fail!",
"Bozeman, Bozeman, summit of the crown,\nGallatin Valley diamonds never letting us down.\nHeart of Montana, wild and free and sound,\nBozeman, Montana—we own the ground!",
"Valley of dreams beneath the Bridger Range,\nBozeman forever—nothing's gonna change."
);

w("Butte","Classic Rock","Gritty, Proud, Resilient","[Style of Music: classic rock, gritty vocals, electric guitar riffs, mining-town pride, resilient energy]",
"Butte, America—richest hill on Earth, and the toughest town alive!",
"The Berkeley Pit standing where the copper mountains stood,\nMiners dug for glory in the neighborhood.\nOur Lady of the Rockies watching from the height,\nCopper King Mansion shining in the light.",
"From the headframes on the hilltop to the Studebaker row,\nButte, Montana—we put on a show!",
"Butte, America, digging deep for gold,\nRichest hill on Earth and a spirit never sold.\nHeadframes standing tall like fingers in the sky,\nButte, Montana—we'll never die!",
"World Museum of Mining telling tales so grand,\nContinental Divide running right through town.\nGranite Mountain Memorial keeping memories near,\nButte's resilience conquering every fear.",
"Ethnic festivals from every corner of the world,\nCeltic and Slavic flags forever unfurled.\nWorking-class roots run deeper than the mines,\nButte stands together through the hardest times!",
"Butte, America, digging deep for gold,\nRichest hill on Earth and a spirit never sold.\nHeadframes lit against the Montana night,\nButte, Montana—we'll fight the fight!",
"Copper hearts and miner soul,\nButte forever—we're whole."
);

w("Helena","Folk Rock","Stately, Patriotic, Resilient","[Style of Music: folk rock, patriotic pride, steady drums, organ tones, capital-city grandeur, resilient vocals]",
"Helena—capital of the Treasure State, built on gold and governed by grit!",
"Last Chance Gulch where prospectors struck it rich,\nCathedral of Saint Helena on the western ridge.\nState Capitol dome gleaming silver in the sun,\nGates of the Mountains where the Missouri runs.",
"From mining camp to capital, we've come a long, long way,\nHelena, Montana—we lead the way!",
"Helena, Helena, capital of gold,\nTreasure State's heartbeat and a story to be told.\nHistory and governance under one big sky,\nHelena, Montana—we'll always fly!",
"Helena Carousel spinning dreams for all,\nPrickly Pear Valley answering the call.\nOriginal Governor's Mansion on Ewing Street,\nVigilantes' legacy in every heartbeat.",
"Gulch to government, the journey forged in stone,\nHelena carries courage she has always known.\nSeven Sisters Mountains keeping watch so tall,\nCapital of Montana—strongest of them all!",
"Helena, Helena, capital of gold,\nTreasure State's heartbeat and a story to be told.\nFrom Last Chance Gulch to the Capitol dome,\nHelena, Montana—this is home!",
"Gold in the ground and gold in our soul,\nHelena forever—we're whole."
);

w("Kalispell","Country Pop","Warm, Welcoming, Scenic","[Style of Music: country pop, bright guitars, warm harmonies, welcoming spirit, small-city pride]",
"Kalispell—the gateway to Glacier and the heart of the Flathead!",
"Flathead Lake shimmering beneath the summer sun,\nGlacier National Park just a short drive run.\nConrad Mansion standing proud on Third Avenue,\nHeritage Museum telling stories tried and true.",
"Where the mountains meet the valley and the lake meets the sky,\nKalispell, Montana—we'll aim high!",
"Kalispell, Kalispell, Flathead Valley's gem,\nGlacier's neighbor and a western diadem.\nWelcoming and wild with mountains all around,\nKalispell, Montana—we're heaven-bound!",
"Woodland Water Park for families in the heat,\nLone Pine State Park with a panoramic seat.\nBuffalo Hill Golf Course under open sky,\nDowntown revitalized—we're soaring high.",
"From the Great Northern Railroad to the present day,\nKalispell welcomes everyone along the way.\nFlathead Valley culture rooted deep and strong,\nKalispell, Montana—this is where we belong!",
"Kalispell, Kalispell, Flathead Valley's gem,\nGlacier's neighbor and a western diadem.\nCrystal clear and proud beneath the Big Sky dome,\nKalispell, Montana—truly home!",
"Lake and mountain, heart and soul,\nKalispell forever—beautiful and whole."
);

w("Havre","Country Western","Frontier-spirited, Tough, Proud","[Style of Music: country western, twangy guitar, frontier spirit, underground history, proud vocals]",
"Havre—where the Hi-Line meets the heart of the frontier!",
"Havre Beneath the Streets hiding prohibition tales,\nFort Assiniboine standing where the cavalry exhales.\nHauling grain from the golden prairie wide,\nBear Paw Mountains watching from the countryside.",
"On the Hi-Line, Haven of the Hi-Line strong and true,\nHavre, Montana—we carry it through!",
"Havre, Havre, pride of the Hi-Line,\nFrontier roots in every grain and vine.\nFrom the underground to the open sky,\nHavre, Montana—we'll never say goodbye!",
"Historic buildings standing proud and tall,\nChinatown stories echoing the call.\nMilk River winding gently through the town,\nPepin Stadium thundering with Friday night renown.",
"Fort Assiniboine, largest fort in the west,\nHavre Beneath—the underground's best!\nHi-Line resilience forged in prairie wind,\nHavre, Montana—we're toughened and skinned!",
"Havre, Havre, pride of the Hi-Line,\nFrontier roots in every grain and vine.\nGrain elevators standing tall and high,\nHavre, Montana—we'll reach the sky!",
"Hi-Line strong, frontier soul,\nHavre forever—we're whole."
);

w("Anaconda","Blues Rock","Gritty, Nostalgic, Resilient","[Style of Music: blues rock, smoky guitar, gritty soul, mining-town resilience, powerful vocals]",
"Anaconda—born from copper, shaped by fire, alive with heart!",
"The Anaconda Smelter Stack rising from the ground,\nCopper Queen of Montana, legendary and profound.\nWarm Springs State Hospital where the healing waters flow,\nAnaconda Smoke Stack—tallest in the world, you know.",
"From the smelter fires to the Deer Lodge Valley floor,\nAnaconda, Montana—we want more!",
"Anaconda, Anaconda, copper in our veins,\nSmelter Stack standing proud through sun and rain.\nMining town with a heart that never quits,\nAnaconda, Montana—we're the real deal, that's it!",
"Old Works Golf Course on the smelter grounds,\nHistoric downtown where the heritage resounds.\nWashoe Theatre Art Deco shining silver bright,\nBear Paw Saloon keeping western spirits light.",
"Marcus Daly's vision built this town from stone,\nThe greatest smelter ever, now it stands alone.\nAnaconda's grit runs deeper than the mine,\nCopper-hearted people every single time!",
"Anaconda, Anaconda, copper in our veins,\nSmelter Stack standing proud through sun and rain.\nDeer Lodge Valley's jewel beneath the western sky,\nAnaconda, Montana—we'll never die!",
"Copper and fire, heart and soul,\nAnaconda forever—we're whole."
);

w("Miles City","Classic Country","Tough, Cattle-proud, Western","[Style of Music: classic country, honky-tonk piano, steel guitar, rodeo energy, cattle-country pride]",
"Miles City—the cowboy capital of Montana, where the Bucking Horse Sale reigns!",
"Custer County Fairgrounds hosting rodeo dreams,\nBucking Horse Sale thunder—nothing's what it seems.\nRange Riders Museum keeping the West alive,\nBroadway Avenue where the cowboys thrive.",
"Where the Yellowstone meets the prairie wide and free,\nMiles City, Montana—cowboy country!",
"Miles City, Miles City, rodeo town,\nBucking horses throwing riders to the ground.\nCattle country roots run deep and strong,\nMiles City, Montana—right where we belong!",
"Pirogue Island refuge where the wildlife stays,\nYucca Theatre shining through the western haze.\nMiles City Arena on the Saturday night,\nStockman's Bar and Grill keeping spirits bright.",
"John B. Miles founded us with frontier grit,\nCottonwood trees and open-range benefit.\nBucking Horse Sale, biggest in the land,\nMiles City cowboys—we take a stand!",
"Miles City, Miles City, rodeo town,\nBucking horses throwing riders to the ground.\nFrom the Yellowstone to the prairie long and wide,\nMiles City, Montana—we ride!",
"Cowboy forever, prairie strong,\nMiles City—we've been here all along."
);

w("Helena Valley Southeast","Folk","Peaceful, Proud, Close-knit","[Style of Music: gentle folk, acoustic guitar, community warmth, valley pride, soft harmonies]",
"Helena Valley Southeast—where family and mountain views come together!",
"Prickly Pear Creek running through the valley green,\nNeighbors waving hello in every homestead scene.\nEast Helena's legacy echoing nearby,\nHelena Valley Southeast beneath the mountain sky.",
"Small-town heart inside the capital's embrace,\nHelena Valley Southeast—we love this place!",
"Helena Valley, southeast corner fine,\nCommunity and family intertwined.\nMountains watching over every home,\nHelena Valley Southeast—we're never alone!",
"Gates of the Mountains just a drive away,\nPine trees standing sentinel each and every day.\nGenerations rooted in the valley deep,\nHelena Valley Southeast has secrets to keep.",
"Close to the capital but country at heart,\nThis is where the good life gets its start.\nValley breezes carry laughter through the trees,\nHelena Valley Southeast—we're at ease!",
"Helena Valley, southeast corner fine,\nCommunity and family intertwined.\nUnder Big Sky where the wild deer roam,\nHelena Valley Southeast—forever home!",
"Valley strong, mountain soul,\nHelena Valley Southeast—we're whole."
);

w("Belgrade","Folk Pop","Growing, Optimistic, Friendly","[Style of Music: folk pop, upbeat acoustic, friendly energy, small-city optimism, warm vocals]",
"Belgrade—the fast-growing heart of the Gallatin Valley!",
"Bozeman Yellowstone Airport welcoming every flight,\nBelgrade growing daily in the mountain light.\nGallatin County Fairgrounds ringing with the cheer,\nBroadway Avenue—small-town charm so near.",
"Where the Gallatin River winds through open space,\nBelgrade, Montana—growing with grace!",
"Belgrade, Belgrade, Gallatin Valley's pride,\nGrowing strong with family by our side.\nAirport town with mountains all around,\nBelgrade, Montana—we're solid ground!",
"Belgrade Community Library where the knowledge flows,\nLocal barbecue bringing everyone in rows.\nBelgrade High Panthers giving all they've got,\nFour-H and FFA keeping spirit hot.",
"From railroad town to modern-day oasis,\nBelgrade welcomes every new face.\nGallatin Valley's little gem shining bright,\nBelgrade, Montana—we'll reach new height!",
"Belgrade, Belgrade, Gallatin Valley's pride,\nGrowing strong with family by our side.\nBig Sky spirit with a friendly face,\nBelgrade, Montana—this is our place!",
"Growing fast with Gallatin grace,\nBelgrade forever—this is our place."
);

w("Helena Valley West Central","Soft Rock","Serene, Family-oriented, Proud","[Style of Music: soft rock, gentle electric guitar, warm vocals, family pride, valley serenity]",
"Helena Valley West Central—where home means everything!",
"Prickly Pear Valley stretching green and wide,\nFamilies building futures with the mountains as their guide.\nWest Side trails winding through the ponderosa pine,\nHelena Valley West Central—the view is divine.",
"On the west side of the valley where the sun sets gold,\nHelena Valley West Central—brave and bold!",
"Helena Valley, west central so fine,\nFamilies and futures intertwined.\nSunset painted skies above our homes,\nHelena Valley West Central—we're not alone!",
"Creekside trails for morning walks at dawn,\nCommunity spirit where the neighbors get along.\nSchools and churches standing strong and true,\nHelena Valley West Central—meant for you.",
"Close enough to town, far enough to breathe,\nThis valley gives us all we need.\nWestern slopes catching evening light so grand,\nHelena Valley West Central—Montana's promised land!",
"Helena Valley, west central so fine,\nFamilies and futures intertwined.\nSunset painted skies above our homes,\nHelena Valley West Central—we're not alone!",
"Valley life, mountain light,\nHelena Valley West Central—future bright."
);
