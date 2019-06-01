/*
*
* Linked List Intersection
*
* Write a function linkedListIntersection that returns the node 
* at which the intersection of two linked lists begins, 
* or null if there is no such intersection.
* 
* Example:
* 
* Given the following two linked lists list1 and list2, 
* linkedListIntersection(list1,list2) should return D 
* as the node of intersection.
* 
*    A → B → C
*             ↘
*               D → E → F
*             ↗
*        X → Y
* 
* Given the following two linked lists list1 and list2, 
* linkedListIntersection(list1,list2) should return NULL 
* as there is no point of intersection.
* 
*    A → B → C → D
*    X → Y → Z
* 
*/

// Helper function (do not edit)
function Node (val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}



function linkedListIntersection(list1, list2) {
  let arr1 = [];
  let arr2 = [];
  let results = [];
  const recurse1 = (list) => {
    const next = list.next;
    if (next === null) {
      return;
    }
    if (next !== null) {
      arr1.push(next.value);
      recurse1(next);
    }
  }
  const recurse2 = (list) => {
    const next = list.next
    if (next === null) {
      return;
    }
    if (next !== null) {
      arr2.push(next.value);
      recurse2(next);
    }
  }
  recurse1(list1);
  recurse2(list2);

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        results.push(arr1[i]);
      } 
    }
  }
  if (results.length > 0) {
    return results;
  } else {
    return null;
  }
}

var A = new Node("A");
var B = new Node("B");
A.next = B;
var C = new Node("C");
B.next = C;
var D = new Node("D");
C.next = D;
var E = new Node("E")
var X = new Node("X");
var Y = new Node("Y");
var Z = new Node("Z");

X.next = Y;
Y.next = D;
let poo = linkedListIntersection(A, X);
console.log(poo);
