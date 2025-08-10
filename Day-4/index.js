//1.How do you check whether a string contains a substring

var mainString = "hello";

let subString = "hel";
//  1. console.log(mainString.includes(subString))

// console.log(mainString.indexOf(subString) !== -1)

// 3. how to get the current url with javascript

// console.log(window.location.href)
// console.log(location.href)

// 4. How to check if an key exists in an object

let obj = {
  name: "john",
};

// console.log("name" in obj) // true
// console.log(obj.hasOwnProperty("name")) // true
//  console.log(obj.name !== undefined) // true

//5. How do you loop through or enumerate javascript object

// let obj2 = {
//   k1:"value1",
//   k2:"value2",
//   k3:"value3"
// }

// for(var key in obj2) {
//   console.log(key, obj2[key])
// }

//6. How do you test for an empty object in javascript

// let obj3 = {

// }

// console.log(Object.entries(obj3).length === 0) // true (Using ECMA 7+)
// console.log(Object.keys(obj3).length === 0) // true (Using ECMA 5+)

// console.log(JSON.stringify(obj3) === "{}") // true (Using JSON)

// 7. How do you make the first letter of a string uppercase in javascript

// let str = "hello world";

// function capitalizeFirstLetter(string) {
// let newArr = string.split(" ");
// let newStr ="" ;
// for(let i=0;i<newArr.length;i++){
// newStr += newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1, newArr[i].length) + " "
// }
//   return newStr
// }

// console.log(capitalizeFirstLetter("hello world"));


// 8.How do you display the current date in javascript

// var today = new Date();
// var dd = String(today.getDate()).padStart(2, "0");
// var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
// var yyyy = today.getFullYear();


// 9. What are the break and continue statement in js :-

// - The break statement is used to "jump out" of a loop . i.e. it break the loop continue executing the code after the loop.


// for(let i=0;i<10;i++){
//   if( i == 5){
//     break
//   }
//   console.log(i)
// }


// for(let i=0;i<10;i++){
//   if( i == 5){
//     continue
//   }
//   console.log(i)
// }

