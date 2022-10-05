function caeasarCipher (str, num) {
    num = num % 26;

    const lowerCaseStr = str.toLowerCase();
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let newString = '';

    for (let index = 0; index < lowerCaseStr.length; index++) {
        const currentLetter = lowerCaseStr[index];
        
        if (currentLetter === ' ') {
            newString += currentLetter;
            continue;
        }

        const currentIndex = alphabet.indexOf(currentLetter);
        let newIndex = currentIndex + num;

        if (newIndex > 25) {
            newIndex = newIndex - 26;
        }

        if (newIndex < 0) {
            newIndex = 26 + newIndex;
        }

        if (str[index] === str[index].toUpperCase()) {
            newString += alphabet[newIndex].toUpperCase();
        } else {
            newString += alphabet[newIndex];
        }
    }

    return newString;
}

console.log(caeasarCipher('Javascript', -900));
