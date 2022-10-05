function isPalindrome(string) {
    string = string.toLowerCase();
    const arr = string.split('');
    const validCharacteres = 'abcdefghijklmnopqrstuvxz'.split('');

    const lettersArr = [];
    arr.forEach(char => {
        if (validCharacteres.indexOf(char) > -1) {
            lettersArr.push(char);
        }
    });

    if (lettersArr.join('') === lettersArr.reverse().join('')) {
        return true;
    }

    return false;
}

console.log(isPalindrome('race car'));

// Receives a string and return true if the string is a Palindrome and return false if the string is not a Palindrome
// Palindrome is a string that spelled the same way both backward and foward
// example race car is a palindrome
// example Madam, I'm Adam
