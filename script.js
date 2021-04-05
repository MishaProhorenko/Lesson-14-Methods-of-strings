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

let firstString = 'Be my Valentine';
let secondString = 'C&C Red Alert 3';
let thirdString = 'WTF';


function replaceRegister(string) {
  string = string.split('')
  let arr = []
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      arr.push(string[i].toLowerCase())
    } else {
      arr.push(string[i].toUpperCase())
    };

  }
  return arr.join('')
}

console.log(replaceRegister(firstString))
console.log(replaceRegister(secondString))
console.log(replaceRegister(thirdString))





//==========================================================================

//#3

// let firstString = 'Be my Valentine.';


// let obj = {
//   symbolsWithoutSpaces: withoutSpaces(firstString),
//   quantityOfWords: quantityOfWords(firstString),
//   sentenceType: sentenceType(firstString)
// }

// function withoutSpaces(ssymbolsWithoutSpaces) {
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