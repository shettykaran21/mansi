// Asynchronous, Synchronous

// const greeting = "Hi Muskan!!";
// console.log(greeting);

// 1. Callbacks
// 2. then, catch
// 3. async/await

// const step1 = () => {
//     return "Step 1";
// };

// const step2 = (output) => {
//     return output + "Step 2";
// };

// const step3 = (output) => {
//     return output + "Step 3";
// };

// const main = () => {
//     const output1 = step1();
//     const output2 = step2(output1);
//     console.log(step3(output2));
// };

const step1 = (callback) => {
    callback();
    return "Step 1";
};

const step2 = (callback) => {
    callback();
    return "Step 2";
};

const step3 = (callback) => {
    callback();
    return "Step 3";
};

const main = () => {
    step1((res) => {
        step2(res, () => {});
    });
};

// const func2 = () => {
//     console.log("I am func2");
// };

// const func1 = (callback) => {
//     console.log("I am func1");
//     callback();
// };

// func1(func2);

// Callback - Function passed as param to a function
// useEffect(() => {}, []);
// array.map(() => {});

setTimeout(() => {
    console.log("Mansi");
}, 3000);

console.log("Taklu");

addToCart;
order;
payment;

// Callback hell
addToCart(() => {
    order(() => {
        payment(() => {
            congrats(() => {
                TextTrackCueList();
            });
        });
    });
});

// then, catch
addToCart()
    .then(() => {
        return order();
    })
    .then(() => {
        return payment();
    })
    .then(() => {
        return congrats();
    })
    .catch((err) => {
        console.log(err);
    });

loadData();
