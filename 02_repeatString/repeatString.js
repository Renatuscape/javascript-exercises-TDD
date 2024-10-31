const repeatString = function (input, repeatCount) {
    if (repeatCount < 0) {
        return 'ERROR';
    }
    return input.repeat(repeatCount);
};

// Do not edit below this line
module.exports = repeatString;
