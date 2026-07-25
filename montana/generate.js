const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname);

function slug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/,'');
}

function writeSong(city, genre, mood, suno, intro, v1, pre, chorus, v2, pre2, chorus2, bridge, finalChorus, outro) {
  const slugName = slug(city.name);
  const content = `# ${city.name}, Montana
*A song celebrating the spirit of ${city.name}*

---

**Genre:** ${genre}
**Mood:** ${mood}
**Suno Tags:** ${suno}

[Intro tag]
${intro}

[Verse 1]
${v1}

[Pre-Chorus]
${pre}

[Chorus]
${chorus}

[Verse 2]
${v2}

[Pre-Chorus]
${pre2}

[Chorus]
${chorus2}

[Bridge]
${bridge}

[Final Chorus]
${finalChorus}

[Outro]
${outro}

---

**City:** ${city.name}
**State:** Montana
**Generated for:** [City Songs Project](https://walusimbi-leon1.github.io/city-songs/)
`;
  fs.writeFileSync(path.join(outDir, slugName + '.md'), content);
  console.log(`✓ ${city.name}`);
}

const data = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'us_cities_filtered.json'), 'utf8'));
const mt = data.montana;

// Skip Billings and Missoula (already written)
const skip = new Set(['billings', 'missoula']);

const songs = {
"Great Falls": {
genre:"Country",mood:"Proud, Spirited, Heartfelt",suno:"[Style of Music: heartfelt country, steel guitar, group vocals, Montana pride, western heritage]",
intro:"Great Falls—where the Missouri River roars and history lives!",
v1:"Giant Springs pouring water from the earth so deep,\nLewis and Clark's portage where their tired legs would sleep.\nMalmstrom Air Force standing guard across the plains,\nCharles Russell painted cowboys through the wind and rain.",
pre:"Black Eagle Falls thundering, the Electric City's call,\nGreat Falls, Montana—we stand strong and tall!",
chorus:"Great Falls, Great Falls, electric through and through,\nThe Missouri River carries our story, old and new.\nCowboy art and waterfall power in our veins,\nGreat Falls, Montana—we'll rise again!",
v2:"C.M. Russell Museum keeping Western spirit strong,\nSacagawea landing at the confluence below.\nFrom Rainbow Falls to Giant Springs—watch our city grow,\nElectric City lighting up the evening glow.",
pre2:"Black Eagle Falls thundering, the Electric City's call,\nGreat Falls, Montana—we stand strong and tall!",
chorus2:"Great Falls, Great Falls, electric through and through,\nThe Missouri River carries our story, old and new.\nCowboy art and waterfall power in our veins,\nGreat Falls, Montana—we'll rise again!",
bridge:"Five waterfalls cascading like a symphony of stone,\nThe Russell Riders keeping cowboy legends known.\nFrom Fort Benton upstream where the steamboats used to land,\nGreat Falls keeps the frontier spirit close at hand!",
final:"Great Falls, Great Falls, electric through and through,\nThe Missouri River carries our story, old and new.\nFive falls of fury, hearts that never wane,\nGreat Falls, Montana—we'll rise again!",
outro:"Waterfalls and cowboys, under Big Sky blue,\nGreat Falls forever—electric and true."
},
"Bozeman": {
genre:"Indie Rock",mood:"Adventurous, Optimistic, Bold",suno:"[Style of Music: indie rock, upbeat energy, adventurous spirit, mountain-town vibe, optimistic vocals]",
intro:"Bozeman—where Gallatin Valley meets the summit of dreams!",
v1:"Montana State Bobcats roaring from the field,\nBridger Bowl powder days that make the spirit yield.\nMuseum of the Rockies with dinosaurs and stars,\nGallatin Valley fairgrounds beneath the western scars.",
pre:"Between Bridger and the Gallatin range, we're alive,\nBozeman, Montana—we thrive, we thrive!",
chorus:"Bozeman, Bozeman, summit of the crown,\nGallatin Valley diamonds never letting us down.\nTech and trails and education leading the way,\nBozeman, Montana—we own the day!",
v2:"Danforth Peace Chapel where the quiet voices pray,\nDowntown Main Street glowing at the end of day.\nHyalite Reservoir reflecting mountain light,\nBozeman Powder Company keeping winters bright.",
pre2:"Between Bridger and the Gallatin range, we're alive,\nBozeman, Montana—we thrive, we thrive!",
chorus2:"Bozeman, Bozeman, summit of the crown,\nGallatin Valley diamonds never letting us down.\nTech and trails and education leading the way,\nBozeman, Montana—we own the day!",
bridge:"From Gallatin Field to Sourdough Ridge,\nBozeman built on courage, wonder, and knowledge bridge.\nLewis found this valley on the expedition trail,\nBozeman lives forever—strength will never fail!",
final:"Bozeman, Bozeman, summit of the crown,\nGallatin Valley diamonds never letting us down.\nHeart of Montana, wild and free and sound,\nBozeman, Montana—we own the ground!",
outro:"Valley of dreams beneath the Bridger Range,\nBozeman forever—nothing's gonna change."
},
"Butte": {
genre:"Classic Rock",mood:"Gritty, Proud, Resilient",suno:"[Style of Music: classic rock, gritty vocals, electric guitar riffs, mining-town pride, resilient energy]",
intro:"Butte, America—richest hill on Earth, and the toughest town alive!",
v1:"The Berkeley Pit standing where the copper mountains stood,\nMiners dug for glory in the neighborhood.\nOur Lady of the Rockies watching from the height,\nCopper King Mansion shining in the light.",
pre:"From the headframes on the hilltop to the Studebaker row,\nButte, Montana—we put on a show!",
chorus:"Butte, America, digging deep for gold,\nRichest hill on Earth and a spirit never sold.\nHeadframes standing tall like fingers in the sky,\nButte, Montana—we'll never die!",
v2:"World Museum of Mining telling tales so grand,\nContinental Divide running right through town.\nGranite Mountain Memorial keeping memories near,\nButte's resilience conquering every fear.",
pre2:"From the headframes on the hilltop to the Studebaker row,\nButte, Montana—we put on a show!",
chorus2:"Butte, America, digging deep for gold,\nRichest hill on Earth and a spirit never sold.\nHeadframes standing tall like fingers in the sky,\nButte, Montana—we'll never die!",
bridge:"Ethnic festivals from every corner of the world,\nCeltic and Slavic flags forever unfurled.\nWorking-class roots run deeper than the mines,\nButte stands together through the hardest times!",
final:"Butte, America, digging deep for gold,\nRichest hill on Earth and a spirit never sold.\nHeadframes lit against the Montana night,\nButte, Montana—we'll fight the fight!",
outro:"Copper hearts and miner soul,\nButte forever—we're whole."
},
"Helena": {
genre:"Folk Rock",mood:"Stately, Patriotic, Resilient",suno:"[Style of Music: folk rock, patriotic pride, steady drums, organ tones, capital-city grandeur, resilient vocals]",
intro:"Helena—capital of the Treasure State, built on gold and governed by grit!",
v1:"Last Chance Gulch where prospectors struck it rich,\nCathedral of Saint Helena on the western ridge.\nState Capitol dome gleaming silver in the sun,\nGates of the Mountains where the Missouri runs.",
pre:"From mining camp to capital, we've come a long, long way,\nHelena, Montana—we lead the way!",
chorus:"Helena, Helena, capital of gold,\nTreasure State's heartbeat and a story to be told.\nHistory and governance under one big sky,\nHelena, Montana—we'll always fly!",
v2:"Helena Carousel spinning dreams for all,\nPrickly Pear Valley answering the call.\nOriginal Governor's Mansion on Ewing Street,\nVigilantes' legacy in every heartbeat.",
pre2:"From mining camp to capital, we've come a long, long way,\nHelena, Montana—we lead the way!",
chorus2:"Helena, Helena, capital of gold,\nTreasure State's heartbeat and a story to be told.\nHistory and governance under one big sky,\nHelena, Montana—we'll always fly!",
bridge:"Gulch to government, the journey forged in stone,\nHelena carries courage she has always known.\nSeven Sisters Mountains keeping watch so tall,\nCapital of Montana—strongest of them all!",
final:"Helena, Helena, capital of gold,\nTreasure State's heartbeat and a story to be told.\nFrom Last Chance Gulch to the Capitol dome,\nHelena, Montana—this is home!",
outro:"Gold in the ground and gold in our soul,\nHelena forever—we're whole."
},
"Kalispell": {
genre:"Country Pop",mood:"Warm, Welcoming, Scenic",suno:"[Style of Music: country pop, bright guitars, warm harmonies, welcoming spirit, small-city pride]",
intro:"Kalispell—the gateway to Glacier and the heart of the Flathead!",
v1:"Flathead Lake shimmering beneath the summer sun,\nGlacier National Park just a short drive run.\nConrad Mansion standing proud on Third Avenue,\nHeritage Museum telling stories tried and true.",
pre:"Where the mountains meet the valley and the lake meets the sky,\nKalispell, Montana—we'll aim high!",
chorus:"Kalispell, Kalispell, Flathead Valley's gem,\nGlacier's neighbor and a western diadem.\nWelcoming and wild with mountains all around,\nKalispell, Montana—we're heaven-bound!",
v2:"Woodland Water Park for families in the heat,\nLone Pine State Park with a panoramic seat.\nBuffalo Hill Golf Course under open sky,\nDowntown revitalized—we're soaring high.",
pre2:"Where the mountains meet the valley and the lake meets the sky,\nKalispell, Montana—we'll aim high!",
chorus2:"Kalispell, Kalispell, Flathead Valley's gem,\nGlacier's neighbor and a western diadem.\nWelcoming and wild with mountains all around,\nKalispell, Montana—we're heaven-bound!",
bridge:"From the Great Northern Railroad to the present day,\nKalispell welcomes everyone along the way.\nFlathead Valley culture rooted deep and strong,\nKalispell, Montana—this is where we belong!",
final:"Kalispell, Kalispell, Flathead Valley's gem,\nGlacier's neighbor and a western diadem.\nCrystal clear and proud beneath the Big Sky dome,\nKalispell, Montana—truly home!",
outro:"Lake and mountain, heart and soul,\nKalispell forever—beautiful and whole."
},
"Havre": {
genre:"Country Western",mood:"Frontier-spirited, Tough, Proud",suno:"[Style of Music: country western, twangy guitar, frontier spirit, underground history, proud vocals]",
intro:"Havre—where the Hi-Line meets the heart of the frontier!",
v1:"Havre Beneath the Streets hiding prohibition tales,\nFort Assiniboine standing where the cavalry exhales.\nHauling grain from the golden prairie wide,\nBear Paw Mountains watching from the countryside.",
pre:"On the Hi-Line, Haven of the Hi-Line strong and true,\nHavre, Montana—we carry it through!",
chorus:"Havre, Havre, pride of the Hi-Line,\nFrontier roots in every grain and vine.\nFrom the underground to the open sky,\nHavre, Montana—we'll never say goodbye!",
v2:"Havre's historic buildings standing tall,\nChinatown stories rise before the fall.\nMilk River winding gently through the town,\nPepin Stadium thundering with Friday night renown.",
pre2:"On the Hi-Line, Haven of the Hi-Line strong and true,\nHavre, Montana—we carry it through!",
chorus2:"Havre, Havre, pride of the Hi-Line,\nFrontier roots in every grain and vine.\nFrom the underground to the open sky,\nHavre, Montana—we'll never say goodbye!",
bridge:"Fort Assiniboine, largest fort in the west,\nHavre Beneath—the underground's best!\nHi-Line resilience forged in prairie wind,\nHavre, Montana—we're toughened and skinned!",
final:"Havre, Havre, pride of the Hi-Line,\nFrontier roots in every grain and vine.\nGrain elevators standing tall and high,\nHavre, Montana—we'll reach the sky!",
outro:"Hi-Line strong, frontier soul,\nHavre forever—we're whole."
},
"Anaconda": {
genre:"Blues Rock",mood:"Gritty, Nostalgic, Resilient",suno:"[Style of Music: blues rock, smoky guitar, gritty soul, mining-town resilience, powerful vocals]",
intro:"Anaconda—born from copper, shaped by fire, alive with heart!",
v1:"The Anaconda Smelter Stack rising from the ground,\nCopper Queen of Montana, legendary and profound.\nWarm Springs State Hospital where the healing waters flow,\nAnaconda Smoke Stack—tallest in the world, you know.",
pre:"From the smelter fires to the Deer Lodge Valley floor,\nAnaconda, Montana—we want more!",
chorus:"Anaconda, Anaconda, copper in our veins,\nSmelter Stack standing proud through sun and rain.\nMining town with a heart that never quits,\nAnaconda, Montana—we're the real deal, that's it!",
v2:"Old Works Golf Course on the smelter grounds,\nHistoric downtown where the heritage resounds.\nWashoe Theatre Art Deco shining silver bright,\nBear Paw Saloon keeping western spirits light.",
pre2:"From the smelter fires to the Deer Lodge Valley floor,\nAnaconda, Montana—we want more!",
chorus2:"Anaconda, Anaconda, copper in our veins,\nSmelter Stack standing proud through sun and rain.\nMining town with a heart that never quits,\nAnaconda, Montana—we're the real deal, that's it!",
bridge:"Marcus Daly's vision built this town from stone,\nThe greatest smelter ever, now it stands alone.\nAnaconda's grit runs deeper than the mine,\nCopper-hearted people every single time!",
final:"Anaconda, Anaconda, copper in our veins,\nSmelter Stack standing proud through sun and rain.\nDeer Lodge Valley's jewel beneath the western sky,\nAnaconda, Montana—we'll never die!",
outro:"Copper and fire, heart and soul,\nAnaconda forever—we're whole."
},
"Miles City": {
genre:"Classic Country",mood:"Tough, Cattle-proud, Western",suno:"[Style of Music: classic country, honky-tonk piano, steel guitar, rodeo energy, cattle-country pride]",
intro:"Miles City—the cowboy capital of Montana, where the Bucking Horse Sale reigns!",
v1:"Custer County Fairgrounds hosting rodeo dreams,\nBucking Horse Sale thunder—nothing's what it seems.\nRange Riders Museum keeping the West alive,\nBroadway Avenue where the cowboys thrive.",
pre:"Where the Yellowstone meets the prairie wide and free,\nMiles City, Montana—cowboy country!",
chorus:"Miles City, Miles City, rodeo town,\nBucking horses throwing riders to the ground.\nCattle country roots run deep and strong,\nMiles City, Montana—right where we belong!",
v2:"Pirogue Island refuge where the wildlife stays,\nYucca Theatre shining through the western haze.\nMiles City Arena on the Saturday night,\nStockman's Bar and Grill keeping spirits bright.",
pre2:"Where the Yellowstone meets the prairie wide and free,\nMiles City, Montana—cowboy country!",
chorus2:"Miles City, Miles City, rodeo town,\nBucking horses throwing riders to the ground.\nCattle country roots run deep and strong,\nMiles City, Montana—right where we belong!",
bridge:"John B. Miles founded us with frontier grit,\nCottonwood trees and open-range benefit.\nBucking Horse Sale, biggest in the land,\nMiles City cowboys—we take a stand!",
final:"Miles City, Miles City, rodeo town,\nBucking horses throwing riders to the ground.\nFrom the Yellowstone to the prairie long and wide,\nMiles City, Montana—we ride!",
outro:"Cowboy forever, prairie strong,\nMiles City—we've been here all along."
},
"Helena Valley Southeast": {
genre:"Folk",mood:"Peaceful, Proud, Close-knit",suno:"[Style of Music: gentle folk, acoustic guitar, community warmth, valley pride, soft harmonies]",
intro:"Helena Valley Southeast—where family and mountain views come together!",
v1:"Prickly Pear Creek running through the valley green,\nNeighbors waving hello in every homestead scene.\nEast Helena's legacy echoing nearby,\nHelena Valley Southeast beneath the mountain sky.",
pre:"Small-town heart inside the capital's embrace,\nHelena Valley Southeast—we love this place!",
chorus:"Helena Valley, southeast corner fine,\nCommunity and family intertwined.\