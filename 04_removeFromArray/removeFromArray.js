const removeFromArray = function (array, ...restArgs) {
    for (i = 0; i < restArgs.length; i++) {
        let index = array.indexOf(restArgs[i]);

        while (index > -1) {
            array.splice(index, 1);
            index = array.indexOf(restArgs[i]);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
