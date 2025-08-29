
// function greet(greeting1 , greeting2){
//    console.log(greeting1 +this.name + " " + greeting2 +"you are "+ this.age
//    )
// }


// let obj = {
//   name : "John",
//   age : 22
// }


// greet.call(obj , "Hello " , "Welcome, ")
// greet.apply(obj , ["Hello " , "Welcome, "])

// let func1 = greet.bind(obj);

// func1("Hello ", "Welcome, ")


// const obj = {
//   1:"name",
//   2:"age",
// }


// console.log(obj)

// let myMap = new Map();
// myMap.set(1 , "name")
// myMap.set(2 , "age")

// console.log(myMap.size)

// let arr = [1,2,3,4,5,6,7,8,9,3,5,6,7,8,9];
// let newArr = [];

// let myMap = new Map();
// for(let i=0; i<arr.length; i++){
// myMap.set(arr[i],(myMap.get(arr[i]) || 0) + 1)
// }

// console.log(myMap.size) 


// let obj ={
//   1:21,
//   2:22,
//   3:23,
//   4:24,
//   5:25,
//   6:26,
//   7:27,
//   8:28
// }

// console.log(Object.entries(obj).length)


// let arrowFunc = ()  => {
//   console.log(this)
// }
// arrowFunc();

// const firstClass = ()=>{
//   console.log("First Class Function")
// }

// function higherOrder(func){
//   func();
// }



// higherOrder(firstClass);

// Unary function  : A function that takes exactly one argument.


// let uri = "employeeDetails?name=john&occupation=manager";
// let encoded_uri = encodeURI(uri);
// let decoded_uri = decodeURI(encoded_uri);

// console.log(encoded_uri)
// console.log(decoded_uri)


//  DOM Practise :- 

// document.body.childNodes[1].innerText = "Hello"
// console.log(document.body.childNodes)

// let head = document.getElementById("heading");
// console.log(head.innerHTML)

// let body = document.getElementById("body");
// body.style.backgroundColor = "lightblue";
// body.style.textAlign = "center";
// body.style.paddingTop = "100px";
// body.style.fontFamily = "Arial";
// body.style.fontSize = "20px"; 
// body.style.color = "darkblue";
// body.style.height = "100vh";
// body.style.margin = "0px";
// body.style.boxSizing = "border-box";
// body.style.letterSpacing = "2px";
// body.style.lineHeight = "1.6";
// body.style.fontWeight = "500";
// body.style.textTransform = "capitalize";
// body.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
// body.style.borderRadius = "10px";
// body.style.border = "2px solid darkblue";
// body.style.backgroundImage = "linear-gradient(to right, lightblue, lightgreen)";
// body.style.transition = "all 0.3s ease-in-out";
// body.style.cursor = "pointer";
// body.onmouseover = function(){
//   body.style.backgroundImage = "linear-gradient(to right, lightgreen, lightblue)";
// }
// body.onmouseout = function(){
//   body.style.backgroundImage = "linear-gradient(to right, lightblue, lightgreen)";
// }
// let name = document.getElementById("name");


// function submitHandler(){
//   let name  = document.getElementById("name").value;
//   console.log(name)
//   name.value = ""
// }

// function abc(val){
//   let num = 0; 
//   for(let i=1; i<=val; i++){
//     let sum = 0;
//     for(let j=0; j<i.toString().length; j++){
//       sum += parseInt(i.toString()[j])

//     }
//     if(sum % 2==0){
//       num= num+1;
       
//     } 
//   }
//   return num;
// }

// let num =4;

// console.log(abc(num)); // Output: 2


// console.log("0".length); // Output: 0

// console.log(0%2 === 0); // Output: true

// console.log((1).toString()); // Output: "1"



var majorityElement = function(nums) {
    let myMap = new Map();
    for(let i=0; i<nums.length; i++){
        myMap.set(nums[i], (myMap.get(nums[i]) || 0) + 1)
        if(myMap.get(nums[i]) > Math.floor(nums.length/2)){
            return nums[i]
        }
    }    
};

let arr = [3,2,3]
console.log(majorityElement(arr))