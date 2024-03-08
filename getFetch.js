/*
    The purpose of this repo is to demonstrate get fetch request Promises of .then notation to async await notation. The JSON object that I am getting back from this site is using a list of array of objects that may also contain key value pairs of arrays and objects.
*/

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => {
//         return res.json();
//     })
//     .then(data => {
//         console.log(data[0].address.street)
//         document.querySelector('p').innerText = data[0].address.street
//     })
//     .catch(error => console.log(error))
    

// .then Promise converted to Async Await
async function fetchData() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        console.log(data[0].name);
        document.querySelector('p').innerText = data[0].name;
    } catch (error) {
        console.log(error);
    }
}

fetchData();
