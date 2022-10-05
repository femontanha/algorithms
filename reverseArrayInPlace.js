function reverseArrayInPlace(arr) {
    // reverse array
    // return reversed array

    for (let i = 0; i < arr.length / 2; i++) {
        const element = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = element;
    }

    return arr;
}

// be sure to manipulate the array passed in
// do not push elements into a new array and return that array
// do not use array method reverse

console.log(reverseArrayInPlace([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));