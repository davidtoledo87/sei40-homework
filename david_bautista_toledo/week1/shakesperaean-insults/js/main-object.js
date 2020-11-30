
console.log('JS loaded 2 !')
//
// const firstAdjectives = [
//   'artless',
//   'bawdy',
//   'beslubbering',
//   'bootless',
//   'churlish',
//   'cockered',
//   'clouted',
//   'craven',
//   'currish',
//   'dankish',
//   'dissembling',
//   'droning',
//   'errant',
//   'fawning',
//   'fobbing',
//   'froward',
//   'frothy',
//   'gleeking',
//   'goatish',
//   'gorbellied',
//   'impertinent',
//   'infectious',
//   'jarring',
//   'loggerheaded',
//   'lumpish',
//   'mammering',
//   'mangled',
//   'mewling',
//   'paunchy',
//   'pribbling',
//   'puking',
//   'puny',
//   'qualling',
//   'rank',
//   'reeky',
//   'roguish',
//   'ruttish',
//   'saucy',
//   'spleeny',
//   'spongy',
//   'surly',
//   'tottering',
//   'unmuzzled',
//   'vain',
//   'venomed',
//   'villainous',
//   'warped',
//   'wayward',
//   'weedy',
//   'yeasty'
// ];
//
// const secondAdjectives = [
//   'base-court',
//   'bat-fowling',
//   'beef-witted',
//   'beetle-headed',
//   'boil-brained',
//   'clapper-clawed',
//   'clay-brained',
//   'common-kissing',
//   'crook-pated',
//   'dismal-dreaming',
//   'dizzy-eyed',
//   'doghearted',
//   'dread-bolted',
//   'earth-vexing',
//   'elf-skinned',
//   'fat-kidneyed',
//   'fen-sucked',
//   'flap-mouthed',
//   'fly-bitten',
//   'folly-fallen',
//   'fool-born',
//   'full-gorged',
//   'guts-griping',
//   'half-faced',
//   'hasty-witted',
//   'hedge-born',
//   'hell-hated',
//   'idle-headed',
//   'ill-breeding',
//   'ill-nurtured',
//   'knotty-pated',
//   'milk-livered',
//   'motley-minded',
//   'onion-eyed',
//   'plume-plucked',
//   'pottle-deep',
//   'pox-marked',
//   'reeling-ripe',
//   'rough-hewn',
//   'rude-growing',
//   'rump-fed',
//   'shard-borne',
//   'sheep-biting',
//   'spur-galled',
//   'swag-bellied',
//   'tardy-gaited',
//   'tickle-brained',
//   'toad-spotted',
//   'unchin-snouted',
//   'weather-bitten'
// ];
//
// const nouns = [
//   'apple-john',
//   'baggage',
//   'barnacle',
//   'bladder',
//   'boar-pig',
//   'bugbear',
//   'bum-bailey',
//   'canker-blossom',
//   'clack-dish',
//   'clotpole',
//   'coxcomb',
//   'codpiece',
//   'death-token',
//   'dewberry',
//   'flap-dragon',
//   'flax-wench',
//   'flirt-gill',
//   'foot-licker',
//   'fustilarian',
//   'giglet',
//   'gudgeon',
//   'haggard',
//   'harpy',
//   'hedge-pig',
//   'horn-beast',
//   'hugger-mugger',
//   'joithead',
//   'lewdster',
//   'lout',
//   'maggot-pie',
//   'malt-worm',
//   'mammet',
//   'measle',
//   'minnow',
//   'miscreant',
//   'moldwarp',
//   'mumble-news',
//   'nut-hook',
//   'pigeon-egg',
//   'pignut',
//   'puttock',
//   'pumpion',
//   'ratsbane',
//   'scut',
//   'skainsmate',
//   'strumpet',
//   'varlot',
//   'vassal',
//   'whey-face',
//   'wagtail'
// ];
//
//
// //PSEUDOCODE
// //Goal: print out a randomly-geberated Insult
// //
// // 1.-pick up a random adjextive from first array
// //  -->how do I pick up a random element from the array?
// // a.Generate and store a random number between 0........length -1
// //  b.use that random number as index into the array and
// //  c. sotre whathever is found at that index
//
// //2.- Pick a random adjective from the second array
// //3.-
//
// const generateRandomInt = function(max){
//   const randomNum = Math.random()*max;
//   const randomInt = Math.floor(randomNum);
//   return randomInt;
// };//generateRandomInt()
//
// const getRandomElementFromArray = function(array){
//   const randomIndex = generateRandomInt (array.length);
//   return array [randomIndex];
// };
//
// const adjectiveOne = getRandomElementFromArray(firstAdjectives);
// const adjectiveTwo = getRandomElementFromArray(secondAdjectives);
// const noun = getRandomElementFromArray(nouns);
//
// // console.log(adjectiveOne,adjectiveTwo,noun);
// const generateInsult = (adjectiveOne,adjectiveTwo,noun);
// console.log = (generateInsult)
//
// //

// const randomFirstNum = Math.random()*firstAdjectives.length;
// const randomFirstIndex = Math.floor(randomFirstNum);
// const firstAdjective = firstAdjectives[randomFirstIndex];
// console.log('firstAdjective:',firstAdjective);
//
// const randomSecondNum = Math.random()*secondAdjectives.length;
// const randomSecondIndex = Math.floor(randomSecondNum);
// const secondAdjective = secondAdjectives[randomSecondIndex];
// // console.log('secondAdjective:',secondAdjective);
// //
// // const randomNoun = Math.random()*nouns.length;
// // const randomNounIndex = Math.floor(randomNoun);
// // const noun = nouns[randomNounIndex];
// // console.log('noun:',noun);
//
// //
// const insults = {
//   firstAdjectives : [
//     'artless',
//     'bawdy',
//     'beslubbering',
//     'bootless',
//     'churlish',
//     'cockered',
//     'clouted',
//     'craven',
//     'currish',
//     'dankish',
//     'dissembling',
//     'droning',
//     'errant',
//     'fawning',
//     'fobbing',
//     'froward',
//     'frothy',
//     'gleeking',
//     'goatish',
//     'gorbellied',
//     'impertinent',
//     'infectious',
//     'jarring',
//     'loggerheaded',
//     'lumpish',
//     'mammering',
//     'mangled',
//     'mewling',
//     'paunchy',
//     'pribbling',
//     'puking',
//     'puny',
//     'qualling',
//     'rank',
//     'reeky',
//     'roguish',
//     'ruttish',
//     'saucy',
//     'spleeny',
//     'spongy',
//     'surly',
//     'tottering',
//     'unmuzzled',
//     'vain',
//     'venomed',
//     'villainous',
//     'warped',
//     'wayward',
//     'weedy',
//     'yeasty'
//
//   secondAdjectives : [
//     'base-court',
//     'bat-fowling',
//     'beef-witted',
//     'beetle-headed',
//     'boil-brained',
//     'clapper-clawed',
//     'clay-brained',
//     'common-kissing',
//     'crook-pated',
//     'dismal-dreaming',
//     'dizzy-eyed',
//     'doghearted',
//     'dread-bolted',
//     'earth-vexing',
//     'elf-skinned',
//     'fat-kidneyed',
//     'fen-sucked',
//     'flap-mouthed',
//     'fly-bitten',
//     'folly-fallen',
//     'fool-born',
//     'full-gorged',
//     'guts-griping',
//     'half-faced',
//     'hasty-witted',
//     'hedge-born',
//     'hell-hated',
//     'idle-headed',
//     'ill-breeding',
//     'ill-nurtured',
//     'knotty-pated',
//     'milk-livered',
//     'motley-minded',
//     'onion-eyed',
//     'plume-plucked',
//     'pottle-deep',
//     'pox-marked',
//     'reeling-ripe',
//     'rough-hewn',
//     'rude-growing',
//     'rump-fed',
//     'shard-borne',
//     'sheep-biting',
//     'spur-galled',
//     'swag-bellied',
//     'tardy-gaited',
//     'tickle-brained',
//     'toad-spotted',
//     'unchin-snouted',
//     'weather-bitten'
//
//   nouns: [
//     'apple-john',
//     'baggage',
//     'barnacle',
//     'bladder',
//     'boar-pig',
//     'bugbear',
//     'bum-bailey',
//     'canker-blossom',
//     'clack-dish',
//     'clotpole',
//     'coxcomb',
//     'codpiece',
//     'death-token',
//     'dewberry',
//     'flap-dragon',
//     'flax-wench',
//     'flirt-gill',
//     'foot-licker',
//     'fustilarian',
//     'giglet',
//     'gudgeon',
//     'haggard',
//     'harpy',
//     'hedge-pig',
//     'horn-beast',
//     'hugger-mugger',
//     'joithead',
//     'lewdster',
//     'lout',
//     'maggot-pie',
//     'malt-worm',
//     'mammet',
//     'measle',
//     'minnow',
//     'miscreant',
//     'moldwarp',
//     'mumble-news',
//     'nut-hook',
//     'pigeon-egg',
//     'pignut',
//     'puttock',
//     'pumpion',
//     'ratsbane',
//     'scut',
//     'skainsmate',
//     'strumpet',
//     'varlot',
//     'vassal',
//     'whey-face',
//     'wagtail'
//
// //
// // methods:
//  generateRandomInt: function( max ){
//    const randomNum = Math.random() * max;
//    const randomInt = Math.floor( randomNum );
//    return randomInt;
//  }, // generateRandomInt()
//  getRandomElementFromArray: function( array ){
//    const randomIndex = generateRandomInt( array.length );
//    return array[ randomIndex ];
//  }, // getRandomElementFromArray()
//  generateInsult: function(){
//    const adjectiveOne = this.getRandomsElementFromArray( firstAdjectives );
//    const adjectiveTwo = this.getRandomElementFromArray( secondAdjectives );
//    const finalNoun = this.getRandomElementFromArray( nouns );
//    return `Thou ${adjectiveOne} ${adjectiveTwo} ${finalNoun}!`;
//  } // generateInsult()
// }; // insults



console.log('Shakespearean Insult Generator (object edition)');
// object version:
const insults = {
  // data:
  firstAdjectives: [
    'artless',
    'bawdy',
    'beslubbering',
    'bootless',
    'churlish',
    'cockered',
    'clouted',
    'craven',
    'currish',
    'dankish',
    'dissembling',
    'droning',
    'errant',
    'fawning',
    'fobbing',
    'froward',
    'frothy',
    'gleeking',
    'goatish',
    'gorbellied',
    'impertinent',
    'infectious',
    'jarring',
    'loggerheaded',
    'lumpish',
    'mammering',
    'mangled',
    'mewling',
    'paunchy',
    'pribbling',
    'puking',
    'puny',
    'qualling',
    'rank',
    'reeky',
    'roguish',
    'ruttish',
    'saucy',
    'spleeny',
    'spongy',
    'surly',
    'tottering',
    'unmuzzled',
    'vain',
    'venomed',
    'villainous',
    'warped',
    'wayward',
    'weedy',
    'yeasty'
  ],
  secondAdjectives: [
    'base-court',
    'bat-fowling',
    'beef-witted',
    'beetle-headed',
    'boil-brained',
    'clapper-clawed',
    'clay-brained',
    'common-kissing',
    'crook-pated',
    'dismal-dreaming',
    'dizzy-eyed',
    'doghearted',
    'dread-bolted',
    'earth-vexing',
    'elf-skinned',
    'fat-kidneyed',
    'fen-sucked',
    'flap-mouthed',
    'fly-bitten',
    'folly-fallen',
    'fool-born',
    'full-gorged',
    'guts-griping',
    'half-faced',
    'hasty-witted',
    'hedge-born',
    'hell-hated',
    'idle-headed',
    'ill-breeding',
    'ill-nurtured',
    'knotty-pated',
    'milk-livered',
    'motley-minded',
    'onion-eyed',
    'plume-plucked',
    'pottle-deep',
    'pox-marked',
    'reeling-ripe',
    'rough-hewn',
    'rude-growing',
    'rump-fed',
    'shard-borne',
    'sheep-biting',
    'spur-galled',
    'swag-bellied',
    'tardy-gaited',
    'tickle-brained',
    'toad-spotted',
    'unchin-snouted',
    'weather-bitten'
  ],
  nouns: [
    'apple-john',
    'baggage',
    'barnacle',
    'bladder',
    'boar-pig',
    'bugbear',
    'bum-bailey',
    'canker-blossom',
    'clack-dish',
    'clotpole',
    'coxcomb',
    'codpiece',
    'death-token',
    'dewberry',
    'flap-dragon',
    'flax-wench',
    'flirt-gill',
    'foot-licker',
    'fustilarian',
    'giglet',
    'gudgeon',
    'haggard',
    'harpy',
    'hedge-pig',
    'horn-beast',
    'hugger-mugger',
    'joithead',
    'lewdster',
    'lout',
    'maggot-pie',
    'malt-worm',
    'mammet',
    'measle',
    'minnow',
    'miscreant',
    'moldwarp',
    'mumble-news',
    'nut-hook',
    'pigeon-egg',
    'pignut',
    'puttock',
    'pumpion',
    'ratsbane',
    'scut',
    'skainsmate',
    'strumpet',
    'varlot',
    'vassal',
    'whey-face',
    'wagtail'
  ],
  // methods:
  generateRandomInt: function( max ){
    const randomNum = Math.random() * max;
    const randomInt = Math.floor( randomNum );
    return randomInt;
  }, // generateRandomInt()
  getRandomElementFromArray: function( array ){
    const randomIndex = this.generateRandomInt( array.length );
    return array[ randomIndex ];
  }, // getRandomElementFromArray()
  generateInsult: function(){
    const adjectiveOne = this.getRandomElementFromArray( this.firstAdjectives );
    const adjectiveTwo = this.getRandomElementFromArray( this.secondAdjectives );
    const finalNoun = this.getRandomElementFromArray( this.nouns );
    return `Thou ${adjectiveOne} ${adjectiveTwo} ${finalNoun}!`;
  } // generateInsult()
}; // insults
