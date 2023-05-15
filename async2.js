// fetch("https://swapi.dev/api/people/1")
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

const fetchData = async () => {
    try {
        const res = await fetch("https://swapi.dev/api/people/1");
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
};

fetchData();
