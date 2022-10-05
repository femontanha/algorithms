// Exemplo que eu fiz

// function reverseWords(str) {
//     // reverse every word in the string
//     // return the new string
//     const arrayOfWords = str.split(' ');
//     const reversedWords = arrayOfWords.map((word) => {
//         let newWord = '';
//         for (let index = word.length -1; index >= 0; index--) {
//             newWord += word[index];
//         }
//         return newWord;
//     });

//     return reversedWords.join(' ');
// }

// console.log(reverseWords('this is a string of words'));

// Exemplo que me pediram para fazer sem usar split ou join

// function reverseWords(str) {
//     let word = '';
//     let arrWords = [];

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] != ' ') {
//             word += str[i];
//         } else {
//             arrWords.push(word);
//             word = '';
//         }
//     }

//     arrWords.push(word);

//     let invertedWord = '';

//     arrWords.forEach(word => {
//         for (let i = word.length - 1; i >= 0; i--) {
//             if (i === 0) {
//                 invertedWord += word[i] + ' ';
//             } else {
//                 invertedWord += word[i];
//             }
//         }
//     });

//     return invertedWord;
// }

// console.log(reverseWords('Hello World again'));

// código do curso

function reverseWords(str) {
    const wordsArr = str.split(' ');
    const reversedWordArray = [];

    wordsArr.forEach(word => {
        let reversedWord = '';
        for (let i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        }
        reversedWordArray.push(reversedWord);
    });

    return reversedWordArray.join(' ');
}

console.log(reverseWords('Hello World again'));

