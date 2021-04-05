'use strict'


//==========================================================================
//#1


// let firstSentence = 'But you have no right to call me a murderer';
// let secondSentence = 'Because they could stand that these were not monsters.'; let thirdSentence = 'And I want to remember it. I never want to forget it.'; 


// function truncate(str, length) {   
//     if(str.length > length) {
//       return str.slice(0, length) + '…'    
//     } else {
//       return str
//     }
//   }
// console.log(truncate(firstSentence,30)) ;
// console.log(truncate(secondSentence, 30));
// console.log(truncate(thirdSentence, 30));

//==========================================================================

//#2

// let firstString = 'Be my Valentine';
// let secondString = 'C&C Red Alert 3';
// let thirdString = 'WTF';


// function replaceRegister(string) {
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === string[i].toUpperCase()) {
//       console.log(string[i].toLowerCase());
//     } else {
//       console.log(string[i].toUpperCase());
//     };

//   }
// }
// replaceRegister(firstString);
// replaceRegister(secondString);
// replaceRegister(thirdString);


//==========================================================================

//#3

// let firstString = 'Be my Valentine.';


// let obj = {
//   symbolsWithoutSpaces: WithoutSpaces(firstString),
//   quantityOfWords: quantityOfWords(firstString),
//   sentenceType: sentenceType(firstString)
// }

// function WithoutSpaces(ssymbolsWithoutSpaces) {
//   return ssymbolsWithoutSpaces.replace(/ /g, '').length;
// }
// function quantityOfWords(words) {
//   return words.split(' ').length
// }
// function sentenceType(typeSentence) {
//   if (typeSentence[typeSentence.length - 1] === '!') {
//     return 'Восклицательное'
//   } else if (typeSentence[typeSentence.length - 1] === '?') {
//     return 'Вопросительное'
//   } else if (typeSentence[typeSentence.length - 1] === '.') {
//     return 'Утвердительное'
//   } else {
//     return null
//   }
// }
// console.log(obj)
//==========================================================================

//#4

// let str = "Follow the white raBbit";
// let ban = 'rabbit';

// function replaceWord(sentence, bannedWord) {      
//    return (`${sentence.replace(new RegExp(bannedWord, 'gi'), `${bannedWord.slice(-1,0).padStart(bannedWord.length, '*')}`)} `)
// }
// console.log(replaceWord(str, ban));