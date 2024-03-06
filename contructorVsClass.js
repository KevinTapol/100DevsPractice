// https://www.youtube.com/watch?v=b5rjEW-_6po&t=2923s&ab_channel=LeonNoel
// Nasa Api fetch with Leon Noel 100Devs

// constructor
function MakeCar(carMake, carModel, carColor, numOfDoors){
    this.make = carMake
    this.model = carModel
    this.color = carColor
    this.doors = numOfDoors
    this.honk = function(){
        alert("BEEP BEEP FUCKER")
    }
    this.lock = function(){
        alert(`Locked ${this.doors} doors!`)
    }
}

// creating a new object based on the Constructor
// Constructors need (){}
// Constructors use Capital first letter for naming conventions
let hondaCivic = new MakeCar('Honda', "Civic", "Silver", 4)

// adding a prototype inheritance so that past object can access the property
MakeCar.prototype.bluetooth = true

// Class