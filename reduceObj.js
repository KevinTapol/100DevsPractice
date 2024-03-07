// https://www.youtube.com/watch?v=s1XVfm5mIuU&ab_channel=WebDevSimplified

/*
using reduce on an array of object values from the key value pairs 
.reduce((accumulator, itemAdded, index, array) => {

}, default start point) 
*/
// declared array of objects
const people = [
    { name: "Kyle", age: 26 },
    { name: "John", age: 31 },
    { name: "Sally", age: 42 },
    { name: "Jill", age: 42 }
]

// Here we are creating an array of objects where the same age value objects are being grouped together into another array of objects by value of same key age.
const result = people.reduce((groupedPeople, person) => {
    const age = person.age
    if (groupedPeople[age] == null)
    groupedPeople[age] = []
    groupedPeople[age].push(person)
    return groupedPeople
}, {})

/*
This arrayOfObjects.reduce((acc, c), {}) will create a new object from the current as follows
result = [
    { 26: [{name: 'Kyle', age: 26}] },
    { 31: [{name: 'John', age: 31}] },
    { 42: [{name: 'Sally', age: 42}, {name: 'Jill', age: 42}] }
]

*/
