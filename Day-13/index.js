
// var obj = {
//   name: 'John',
//   age: 30,
// }

// console.log(obj);

// const newObj  = Object();

// newObj.name = 'Jane';
// newObj.age = 25;
// console.log(newObj);


// const obj = Object.create(null);
// console.log(obj);

let vehicle = {
  wheels: "4",
  fuelType: "Gasoline",
  color: "Green",
};
let carProps = {
  type: {
    value: "Volkswagen",
  },
  model: {
    value: "Golf",
  },
};

// var car = Object.create(vehicle, carProps);
// console.log(car); // This will log the car object with inherited properties from vehicle and does not display the values directly because they are not enumerable by default. but we can access them directly.
// console.log(car.wheels);
// console.log(car.type);


// class Person{
//   constructor(name){
//     this.name = name;
//   }
// }
// const person = new Person("John");
// console.log(typeof person); // This will log the person object with the name property set to "John


// let obj ={
//   name: "John",
//   age: 30,
//   greet: function() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }


// const newObj = Object.create(obj);
// newObj.name = "Jane";
// newObj.age = 25;

// newObj.greet()


// class Vehicle{
//   constructor(type){
//     this.type = type;
//   }
//   drive(){
//     console.log(`Driving a ${this.type}`);
//   }
// }

// class Car extends Vehicle{
//   constructor(type, model){
//     super(type);
//     this.model = model;
//   }
//   drive(){
//     console.log(`Driving a ${this.type} ${this.model}`);
//   }
// }

// const myCar = new Car("Volkswagen", "Golf");
// myCar.drive(); // This will log "Driving a Volkswagen Golf"

