/*
The goal here is to demonstrate Object Oriented Programming Pillars of Encapsulation, Abstraction, Inheritance and Polymorphism.
https://www.youtube.com/watch?v=yEhs4XtuAgA&ab_channel=LeonNoel
1:32:50
Encapsulation - The process of storing functions (methods) with their associated data (properties) in one thing (object).
    But why? - Made it easier to add new stuff, to read through what was already coded, and made it so you were not afraid to make changes.
Abstraction - Hide details and show essentials.
    But why? - Smaller more manageable pieces of code
Inheritance - Make a class from another class for a hierarchy of classes that share a set of properties and methods.
    But why? - Helps you eliminate redundant code.
Polymorphism - Code written to use an interface automatically knows how to work with any number of different objects that provide the interface.
    But why? - Helps you avoid if/else and switch cases. Also makes your code reusable.
*/

class Contractor {
    constructor(name, role){
        this._name = name
        this._role = role
    }
    get name(){
        return this._name
    }
    get role(){
        return this._role
    }
    sayHello(){
        console.log(`Hello, my name is ${this._name} and I'm on the ${this._role} team!`)
    }
}

class Front extends Contractor{
    constructor(name, role, tech){
        super(name, role)
        this._tech = tech
    }
    get tech(){
        return this._tech
    }
    sayHello(){
        console.log(`Hello, my name is ${this._name} and I work on the ${this._role} team using ${this._tech}`)
    }
}

class Back extends Contractor{
    constructor(name, role, hobby){
        super(name, role)
        this._hobby = hobby
    }
    get hobby(){
        return this._hobby
    }
    sayHello(){
        console.log(`Hello, my name is ${this._name} and I work on the ${this._role}. My hobby is ${this._hobby}`)
    }
}

let John = new Front("John", "Front-End", "React")
let Bob = new Back("Bob", "Back-End", "Bowling")
let Jane = new Contractor("Jane", "HR")

let employeesArr = [John, Bob, Jane]

for (employee of employeesArr){
    employee.sayHello()
}

// Encapsulation is being used here to combine the properties and methods into one object.

// Abstraction is being used here as the getter to return the this._input naming convention. Also super is abstracting the inheritance of the getters for this._name and this._role.

// Inheritance is being used with the super(inherited properties) to go up one class and grab the properties and getters associated with it.

// Polymorphism is being used with the sayHello() method. As shown in the for loop of the array of objects, each object is using the same method but achieving a different console based on their object class.