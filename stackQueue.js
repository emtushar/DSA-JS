// Stack using queue
const Stack = function () {
  this.q1 = [];
  this.q2 = [];
};

Stack.prototype.enqueue = function (value) {
  while (this.q1.length !== 0) {
    this.q2.push(this.q1.shift());
  }
  this.q1.push(value);
  while (this.q2.length !== 0) {
    this.q1.push(this.q2.shift());
  }
  return this.q1;
};
Stack.prototype.dequeue = function () {
  if (this.q1.length === 0) {
    return -1;
  }
  return this.q1.shift();
};
Stack.prototype.isEmpty = function () {
  return this.q1.length === 0;
};
Stack.prototype.size = function () {
  return this.q1.length;
};
Stack.prototype.peek = function () {
  return this.q1[0];
};

let stack = new Stack();

console.log(stack.enqueue(2));
console.log(stack.enqueue(8));
console.log(stack.enqueue(5));
console.log(stack.enqueue(3));
console.log(stack.isEmpty());
console.log(stack.peek());
console.log(stack.size());
console.log(stack.dequeue());
console.log(stack.dequeue());
console.log(stack.peek());
console.log(stack.size());
