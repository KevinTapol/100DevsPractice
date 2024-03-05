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
