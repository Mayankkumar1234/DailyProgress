
//1. Convert two srting into a single string

let str = 'Mayank';
let str2 = "Developer";




 function mergeTwoString(str1, str2){
     let i=0;
    let j=0;
    let k= str1.length;
    let l= str2.length;
   let newStr = ""
    while(i <k && j<l){
          newStr +=str1[i]
          newStr += str2[j]
        i++;
       j++;
        }
      while(i<k){
       newStr += str1[i];
       i++;
     }
      while(j<l){
        newStr += str2[j];
        j++;
      }    return newStr;

            }

            console.log(mergeTwoString(str, str2)); // Output: "MDaeyvankleor"