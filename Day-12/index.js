function merge(arr1  , arr2){
     let i=0 , j=0;
     let newArr = [];
     while( i < arr1.length && j < arr2.length){
      if(arr1[i]< arr2[j]){
        newArr.push(arr1[i])
         i++;
      }else{
         newArr.push(arr2[j])
         j++;
     }
}
   while( i < arr1.length){
    newArr.push(arr1[i]);
    i++
   }
   while(j< arr2.length){
    newArr.push(arr2[j]);
    j++;
   }
   return newArr
}


function mergeSort(nums){
   if(nums.length == 1)  return nums;

     let midIdx = Math.floor(nums.length/2);
    let left =  mergeSort(nums.slice(0 , midIdx));
    let right =  mergeSort(nums.slice(midIdx));
   return   merge(left , right); 
}

let arr = [3,1,4,2]
console.log(mergeSort(arr))