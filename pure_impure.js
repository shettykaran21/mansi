// Pure, Impure functions

// Pure functions
// 1. Same input, always same output
// 2. Change global variable values

const multiply = (num) => {
    return num * 2;
};

// Impure function
const random = (num) => {
    return Math.random(num);
};

const passByRef = (obj) => {
    obj.name = "Karan";
    return obj;
};

console.log(
    passByRef({
        name: "Mansi",
        age: 21,
    })
);

// Impure function
let counter = 0;
const increment = () => {
    return counter++;
};

// console.log(random(3));
// console.log(random(3));
// console.log(random(3));

console.log(increment());
console.log(increment());
