const findAge = function(death,birth){
    if (!death)
    {
        death = currentYear = new Date().getFullYear();

    }
    return death-birth;
}
const findTheOldest = function(people) {
    oldestPerson = null;
    oldest = 0;
    for (const person of people){
        let death = person.yearOfDeath;
        let birth = person.yearOfBirth
        let age = findAge(death,birth);
        if (age > oldest){
            oldest = age;
            oldestPerson = person;       
        }

    }
    return oldestPerson;

};



// Do not edit below this line
module.exports = findTheOldest;
