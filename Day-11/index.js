// class Node{
//   constructor(value){
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList{
//   constructor()
//   {
//     this.head = null;
//     this.length = 0;
//   }

//     push(value){

//       const newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//     } else {
//       let current = this.head;
//       while (current.next) {
//         current = current.next;
//       }
//       current.next = newNode;
//     }
//     this.length++;
//     }
// }

// function getIntersection(headA ){
//      let obj = {};
//     //  let temp = headA;
//     //  while(temp != null){
//     //    obj[temp] = 1;
//     // //  }
//     obj[headA]= 1;
//      console.log(obj)
//     // console.log(headA)
// }

// const myLinkedlist = new LinkedList();
// myLinkedlist.push(1);
// myLinkedlist.push(2);
// myLinkedlist.push(3);
// myLinkedlist.push(4);

// getIntersection(myLinkedlist.head)

//  Program to perform selection sort :-

// function selectionSortArray(arr) {

//   for(let i=0;i<arr.length-1;i++){
//     let min = i;
//     for(let j=i+1;j<arr.length;j++){
//       if(arr[min]> arr[j]){
//         min  = j;
//       }
//     }
//     let temp = arr[i];
//      arr[i] = arr[min]
//      arr[min] = temp
//   }
//   return arr

// }

// console.log(selectionSortArray(arr1));



//  Program to perform the quick sort in js :-


// function quicksortArr(arr){
// console.log(arr)
// }

// let arr1 = [8, 0, 7, 1, 3];
// console.log(quicksortArr(arr1))


class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor()
  {
    this.head = null;
    this.length = 0;
  }

    push(value){

      const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
    }
    
    sortLinkedList(){
      //  Sorting the linkedlist using insertion sort method :-

      if(this.length <2)   return this.head;
      let sortedList = this.head;
      let unsortedList = this.head.next;
        sortedList.next = null;
      while(unsortedList != null){
          let curr = unsortedList;
          unsortedList = unsortedList.next;
          if(curr.value < sortedList.value){
            curr.next = sortedList;
            sortedList = curr;
          }else{
            let searchPointer = sortedList;
            while(searchPointer?.next != null && searchPointer.next.value < curr.value){
               searchPointer = searchPointer.next;
            }
          curr.next = searchPointer.next;
          searchPointer.next = curr
          }
       } 
      // //  this.head = sortedList
      this.head =  sortedList
      return this.head 
    }

}


const myLinkedlist = new LinkedList();
myLinkedlist.push(4);
myLinkedlist.push(2);
myLinkedlist.push(1);
myLinkedlist.push(3);

console.log(myLinkedlist.sortLinkedList()) 
console.log(myLinkedlist)