/*
 * Assignment: Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere
 *
 * Explanation:
 *
 * Generally, we assume that a linked list will terminate in a null next pointer, as follows:
 *
 * A -> B -> C -> D -> E -> null
 *
 * A 'cycle' in a linked list is when traversing the list would result in visiting the same nodes over and over
 * This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:
 *
 * A -> B -> C
 *      ^    |
 *      |    v
 *      E <- D
 *
 * Example code:
 *
 * var nodeA = Node('A');
 * var nodeB = nodeA.next = Node('B');
 * var nodeC = nodeB.next = Node('C');
 * var nodeD = nodeC.next = Node('D');
 * var nodeE = nodeD.next = Node('E');
 * hasCycle(nodeA); // => false
 * nodeE.next = nodeB;
 * hasCycle(nodeA); // => true
 *
 * Constraint 1: Do this in linear time
 * Constraint 2: Do this in constant space
 * Constraint 3: Do not mutate the original nodes in any way
 */

var Node = function(value) {
  return { value: value, next: null };
};

var hasCycle = function(linkedList) {
  const links = [];
  const sorted = links.slice().sort();
  const duplicated = [];
  const checkLink = function(list) {
    for (let i = 0; i < sorted.length; i++) {
      if (sorted[i+1] === sorted[i]) {
        duplicated.push(sorted[i]);
      }
    }
    if (duplicated.length !== links.length) {
      return true;
    }
    if (linked !== undefined && linkedList.next !== null) {
      links.push(linkedList.next);
      checkLink(linkedList.next);
    } else {
      return false;
    }
  }
  checkLink(linkedList);
  return checkLink === true ? true: false;
};

//plan
//put next values in links array
//check to see if links has any duplicate values
//if so, return true
//if not and next value isn't null
// then push the next value in to links and run recursive functions on next values
//else return false
//ran into callstack error, need to come up with base case that will exit out
//base case should be checking if the links array has any duplicate values
