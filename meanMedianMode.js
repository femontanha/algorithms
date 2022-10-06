function meanMedianMode(arr) {
    // call other 3 functions
    // return obj which has mean, median, mode on it

    return {
        mean: getMean(arr),
        median: getMedian(arr),
        mode: getMode(arr),
    };
}

function getMean(arr) {
    let sum = 0;

    arr.forEach(num => {
        sum += num;
    });

    return sum / arr.length;
}

function getMedian(arr) {
    arr.sort((a, b) => {
        return a - b;
    });

    let median;

    if (arr.length % 2 !== 0) {
        median = arr[Math.floor(arr.length / 2)];
    } else {
        median1 = arr[(arr.length / 2) - 1];
        median2 = arr[(arr.length / 2)];
        median = ((median1 + median2) / 2);
    }

    return median;
}

// numbers that most appear often - return an array
// use object as a hash table
function getMode(arr) {
    let modeObj = {};

    arr.forEach(num => {
        if (!modeObj[num]) {
            modeObj[num] = 0;
        }
        modeObj[num]++;
    });

    let maxFrequency = 0;
    let modes = [];
    for (let num in modeObj) {
        if(modeObj[num] > maxFrequency) {
            modes = [num];
            maxFrequency = modeObj[num];
        } else if (modeObj[num] === maxFrequency) {
            modes.push(num);
        }
    }

    if (modes.length === Object.keys(modeObj).length) {
        modes = [];
    }

    return modes;
}

//console.log(meanMedianMode([1, 2, 3, 4, 5, 4, 6, 1]))
console.log(meanMedianMode([9, 10, 23, 10, 23, 9]))
