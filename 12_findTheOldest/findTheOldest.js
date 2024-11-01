const findTheOldest = (people) => {
    return people.sort((b, a) => ((a.yearOfDeath ?? new Date().getFullYear()) - a.yearOfBirth) - ((b.yearOfDeath ?? new Date().getFullYear()) - b.yearOfBirth))[0];
};

// Do not edit below this line
module.exports = findTheOldest;
