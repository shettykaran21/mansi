function test() {
    console.log("test");
}

// const test = () => {
//     return test;
// };

const test2 = (x, func) => {
    console.log(x);
    func();
};

// useEffect(() => {}, []);

// useEffect(function () {}, []);

// test2(4, test);

// Multi-line strings
const str = `fsdfjlskf
fsfjlsfjksdkfjdsl
fkjsfsldkflsdf
fjsdlkfdskf`;
console.log(str);

// const fullName = firstName + ' ' + lastName
// Tempelate literal
const fullName = `${firstName} ${lastName}`;
