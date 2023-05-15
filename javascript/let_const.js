// var is not block scoped
// var is only function scoped

// block ke andar -> global
// function ke andar -> local

// if (true) {
//     var girlName = "Mansi";
// }

// function changeName() {
//     girlName = "Karan";
// }

// console.log(boyName);

// console.log(girlName);
// changeName();
// console.log(girlName);

let mansiAge = 21;
// JS mein chalta hai sab
// JS is loosely coupled
mansiAge = "Twenty Two";
console.log(mansiAge);

// Typerror - Assignment to constant variable
// const mansiName = "Mansi";
// mansiName = "Karan";

const person = {
    name: "Mansi",
    age: 21,
};

// TypeError: Assignment to constant variable.
// person = {
//     name: "Karan",
//     age: 22
// }

// Ye chalta hai, andar ke key values change kar sakte
person.age = 22;
console.log(person);

// TypeError: Assignment to constant variable.
const sum = 0;
const calc = () => {
    return sum++;
};
console.log(calc());
