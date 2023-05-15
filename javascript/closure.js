const incrementer = (counter) => {
    const increment = () => {
        return counter++;
    };
    return increment;
};

const counter1 = incrementer(0);
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());

const counter2 = incrementer(0);
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
