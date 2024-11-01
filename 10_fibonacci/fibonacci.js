const fibonacci = function (fibNumber) {
    if (fibNumber < 0) {
        return 'OOPS';
    }

    const fibSequence = [0, 1];

    while (fibSequence.length <= fibNumber){
        fibSequence.push(fibSequence[fibSequence.length - 2] + fibSequence[fibSequence.length - 1])
    }

    console.log(fibNumber + " returned " + fibSequence[fibNumber] + ". Length of fibSequence is " + fibSequence.length);
    return fibSequence[fibNumber];
};

// Do not edit below this line
module.exports = fibonacci;
