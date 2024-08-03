const getAge = function (person) {
  person.yearOfDeath ??= new Date().getFullYear();

  return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function (people) {
  const peopleOldestToYoungest = people.sort((person, nextPerson) => getAge(nextPerson) - getAge(person));

  return peopleOldestToYoungest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
