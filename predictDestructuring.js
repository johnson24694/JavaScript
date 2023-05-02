const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output  Should print out Tesla, Mercedes.
console.log(randomCar)
console.log(otherRandomCar)

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output  Should print out just Elon once.  
console.log(name);
console.log(otherName);

// Threw an error that "name" is not defined.

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output  Will print the const password but will throw an error that 'password' is not defined inside the person object.
console.log(password);
console.log(hashedPassword);

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output  Will print out value, [1,5,1,8,3,3], 1, will say that 'willThisWork' is undefined.  It actually printed out '5' for the last output.
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);







