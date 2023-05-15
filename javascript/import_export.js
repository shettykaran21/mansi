// Named export, default export

/* -------------------- ES6 -------------------- */
// Named
// export const print = () => {
//     console.log("Hi Mansiii!");
// };

const print = () => {
    console.log("Hi Mansiii!");
};

// Named
export { print };

// Default
// export default print;

/* -------------------- Previous version -------------------- */
// Named
export function echo() {
    console.log("Hi Takluuu!");
}

// Named
function echo() {
    console.log("Hi Takluuu!");
}
export { echo };

// Default
// export default function echo() {
//     console.log("Hi Takluuu!");
// }

function echo() {
    console.log("Hi Takluuu!");
}
export default echo;
