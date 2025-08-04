
//1. freeze method in js


// const obj = {
//   prop : 1000
// }

// Object.freeze(obj);

// obj.prop = 200;

// console.log(obj) //{prop: 1000}


// // nested properties 

// const user = {
//   name:"john",
//   employment:{
//     department:"IT"
//   }
// }
// Object.freeze(user);

// user.employment.department = "HR";

// console.log(user) // { name: 'john', employment: { department: 'HR' } }

// 2. How to convert a string to title case with javascript
// function toTitleCase(str) {
//   return str.replace(/\w\S*/g, function (txt) {
//     return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
//   });
// }
// toTitleCase("good morning john"); // Good Morning John

// Check how does it works


//3. How do you determine whether object is frozen or not  :- Object.isFrozen()

// const obj = {
//   name:"mayank",
//   property:"Hey hello"
// }

// Object.freeze(obj)

// console.log(Object.isFrozen(obj))


//4. How do you determine two values same or not using object :- Object.is();



// console.log(Object.is(NaN, NaN))  // true

// console.log(Object.is("hello", "hello")); // true

// console.log(Object.is([], []));  // false

// const obj1 = {};
// const obj2 = {};

// console.log(Object.is(obj1, obj2)); // false


// 5. how do you copy properties from one object to other : Object.assign()

// let obj1 = {
//   a:1,
//   b:2
// }

// let obj2 = {
//   c:3,
//   d:4
// }


// let newObj = Object.assign(obj1, obj2);


// console.log(obj1)     //{ a: 1, b: 2, c: 3, d: 4 }
// console.log(newObj)  //{ a: 1, b: 2, c: 3, d: 4 }


// const target = { a: 1, b: 2 };
// const source = { b: 3, c: 4 };

// const returnedTarget = Object.assign(target, source);

// console.log(target); // { a: 1, b: 3, c: 4 }

// console.log(returnedTarget); // { a: 1, b: 3, c: 4 }


//6. What is the purpose of the seal method : Object.seal()
// -  It prevents from adding new property to the object but existing property can be changed 

let obj = {
  name:"Mayank"
}

Object.seal(obj);

obj.name="Rohit";
console.log(Object.isSealed(obj));

delete obj.name  // You cannot delete when sealed

console.log(obj); 


// 7. How do you determine if an object is sealed or not :- Object.isSealed()


//  8. what is WeakSet : A WeakSet is used to store a collection of weakly refernce objects .

const ws = new WeakSet();


// 9. What is weakMap :


// 10. What is the purpose of uneval - It is the builtin function which is used to create a string representation of the source code of and object.

var a =1;
// console.log(uneval(a))

// console.log(uneval(function(){})) // Give and error it is now deplrecated 

// toString -> is now used to convert them into string

console.log(a.toString());


