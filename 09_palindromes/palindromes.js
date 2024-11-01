const palindromes = function (stringInput) {
    stringInput = stringInput.toLowerCase().replace(/\W/g, '');

    const reversedString = stringInput.split('').reverse().join('');
    return reversedString === stringInput;
};

// Do not edit below this line
module.exports = palindromes;
