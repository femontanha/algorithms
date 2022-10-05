function harmlessRansomNote (noteText, magazineText) {
    const noteArr = noteText.split(' ');
    const magazineArr = magazineText.split(' ');
    const magazineObj = {};

    magazineArr.forEach(word => {
        if (!magazineObj[word]) {
            magazineObj[word] = 0;
        }
        magazineObj[word]++;
    });

    let noteIsPossible = 'Yes';
    noteArr.forEach(word => {
        if (magazineObj[word]) {
            magazineObj[word]--;
            if (magazineObj[word] < 0) {
                noteIsPossible = 'No';    
            }
        } else {
            noteIsPossible = 'No';
        }
    });

    return noteIsPossible;
}

console.log(harmlessRansomNote(
    'glory of notorious day',
    'The opposite of notorious glorious day could be a very challenge support to our glory days'
));
