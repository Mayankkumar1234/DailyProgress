// // 1 Count the number of comparisons and swaps in bubble sort


// function bubbleSort(arr){
//   let n = arr.length;
//     let comp =0;
//     let swap =0;
//     for(let i=0;i<n-1;i++){
//         for(let j=1;j<n-i;j++){
//            if(arr[j-1]>arr[j]){
//                let temp = arr[j-1];
//                arr[j-1] = arr[j];
//                arr[j] = temp;
              
//                 swap++;
//            }
//              comp++;
//         }
//     }
//     console.log(comp , swap)
//     return arr
    
// }

// let arr = [12, 7, 5, 19, 8, 3];

// console.log(bubbleSort(arr))
 

// 2. Write a program to print this pattern :-

    //       
         // 
        //  
      //  
    //   *********
  //      *******
       //  *****
       //   ***
      //     *
      
      

// function printPattern(n){
//     for(let i=0;i<n;i++){
//         let space =""
//         for(let j=0;j<i;j++){
//             space +=" ";
//         }
//         console.log(space)
//         space=""
//         let star=""
//         for(let k=0;k<2*n-2*i-1;k++){
//             star +="*";
//         }
//         console.log(star);
//         star =""
//         let space2 =""
//         for(let l=0;l<i;l++){
//             space2 +=" ";
//         }
//          console.log(space2)
//           space2= ""
//     }
    
// }

//     printPattern(5)