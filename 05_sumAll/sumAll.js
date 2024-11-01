const sumAll = function (startNumber, endNumber) {
    if (!Number.isInteger(startNumber) || !Number.isInteger(endNumber) || startNumber < 0 || endNumber < 0) {
        return 'ERROR';
    }

    let sum = 0;
    for (i = Math.min(startNumber, endNumber); i <= Math.max(startNumber, endNumber); i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;