/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
  var Stack = function() {
    this.storage = {};
    this.stackSize = 0;
    this.list = [];
  // add an item to the top of the stack

};
    Stack.prototype.push = function(value) {
      this.storage[this.stackSize] = value;
      this.stackSize++;
      if (this.list.length < 1) {
        this.list.push(value);
      }
      if (this.list.length > 0) {
        this.list.length.push(Math.min(value, this.list[this.list.length-1]));
      }
      return this.storage;
    };

  // remove an item from the top of the stack
    Stack.prototype.pop = function() {
      let removed = this.storage[this.stackSize-1];
      if (this.list.length > 0) {

      }
      if (this.stackSize > 0) {
        delete this.storage[this.stackSize-1];
        this.stackSize--;
        return removed;
      }
    };

  // return the number of items in the stack
    Stack.prototype.size = function() {
      return this.stackSize;
    };

  // return the miniimum value in the stack
    Stack.prototype.min = function() {
      return this.list[this.list.length-1];
    };
