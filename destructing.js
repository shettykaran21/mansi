/* ------------------ Object destructing ----------------- */
const person = {
    name: "Mansi",
    age: 21,
    hobby: ["dancing", "volleyball", "no singing"],
};

// const name = person.name;
// const firstName = person.name;
// const age = person.age;
// const hobby = person.hobby;

const { name: firstName, age, hobby } = person;

/* ------------------ Array destructing ----------------- */
const elements = [1, 2, 3, 4, 5];

// const first = elements[0];
// const second = elements[1];
const [first, second] = elements;
