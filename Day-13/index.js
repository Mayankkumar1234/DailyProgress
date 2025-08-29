
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

//  Call , Apply and Bind :- These are methods in JavaScript that allow you to control the context (`this`) in which a function is executed.


// const obj = {
//   name:"John",
//   age:21
// }

// function greet(greeting1 , greeting2){
//   console.log(`${greeting1} ${this.name}, ${greeting2}! You are ${this.age} years old.`);
// } 

// greet.call(obj, "Hello", "Good Morning"); // Using call to invoke greet with obj as context

// greet.apply(obj , ["Hello", "Good Morning"]); // Using apply to invoke greet with obj as context and passing arguments as an array



// const objStr = JSON.stringify({
//   name: "John",     
//   age: 30,
// });

// let obj = JSON.parse(objStr);
// console.log(obj)

// const obj = {
// 1:21,

// }

4444444
4333334
4322234
4321234
4322234
4333334
4444444

function printPattern(){

// let n = 4;

// console.log(n)
// for(let i=0;i<2*n-1;i++){
//   let val = "";
//   for(let j=0;j<2*n-1;j++){
     
//     let left = j;
//     let top = i;
//     let right = (2*n-2) -j;
//     let bottom = (2*n-2) - i;
//      val += n - Math.min(Math.min(left , right), Math.min(top , bottom));
    
//   }
//   console.log(val)
// }
}


// let n = 5;

// for(let i=0;i<n;i++){
//   let str = "";
//    for(let k=i ;k<n;k++){
//      str +="*"
//    }
//   for(let j=0;j<2*i;j++){
//     str +=" "
//   }
//   for(let l=i;l<n;l++){
//       str+="*"
//   }
//   console.log(str)
// }
// for(let i = n;i>0;i--){
//   let str = ""
//   for(let j=i;j<=n;j++){
//     str +="*"
//   }
//   for(let k=0;k<2*i-2;k++){
//     str +=" "
//   }
//   for(let l=i;l<=n;l++){
//     str +="*"
//   }
//   console.log(str)
// }

// Output :
  // **********
//   ****  ****
//   ***    ***
//   **      **
//   *        *
//   *        *
//   **      **
//   ***    ***
//   ****  ****
//   **********



// let n=5;

// for(let i =0;i<n;i++){
// let stars = "*".repeat(2*n-2*i-1);
//   let spaces = " ".repeat(i);
//   console.log( spaces + stars)
// }

// for( let i = 2;i<=n;i++){
//   let stars = "*".repeat(2*i-1);
//    let spaces = " ".repeat(n-i);
//   console.log(spaces + stars)
// }

// Output :

// *********
//  *******
//   *****
//    ***
//     *
//    ***
//   *****
//  ********
// **********


