const elements = [1, 2, 3, 4, 5];

/* ------------------ Rest operator ----------------- */
// Rest with destructing
// const [first, second, ...other] = elements;
// console.log(other);

// Rest as function param
// const func = (x, y, ...other) => {
//     let sum = x + y;
//     other && other.forEach((el) => (sum += el));
//     return sum;
// };
// console.log(func(2, 3, 4, 5, 6, 7, 8));

/* ------------------ Spread operator ----------------- */
// Array spread
console.log(...elements);

// Object spread
const person = {
    name: "Taklu",
    age: 21,
};

const person2 = {
    ...person,
    name: "Mansi",
    hobbies: ["fsdlkfjdslfk", "flsfj"],
};

// 0/O

console.log(person2);
