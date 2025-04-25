const QueueStack = function () {
  this.s1 = [];
  this.s2 = [];
};

QueueStack.prototype.enqueue = function (value) {
  this.s1.push(value);
  return value;
};
QueueStack.prototype.dequeue = function () {
  if (this.s2.length === 0) {
    while (this.s1.length !== 0) {
      this.s2.push(this.s1.pop());
    }
    return this.s2.pop();
    // while (this.s2.length !== 0) {
    //   this.s1.push(this.s2.pop());
    // }
  }
  //   return this.s1;
};

QueueStack.prototype.peek = function () {
  if (this.s1.length === 0) {
    return -1;
  } else {
    return this.s1[0];
  }
};
QueueStack.prototype.isEmpty = function () {
  return this.s1.length === 0 && this.s2.length === 0;
};
QueueStack.prototype.size = function () {
  return this.s1.length;
};

let queueStack = new QueueStack();

console.log(queueStack.enqueue(1));
console.log(queueStack.enqueue(6));
console.log(queueStack.enqueue(2));
console.log(queueStack.enqueue(7));
console.log(queueStack.enqueue(3));
console.log(queueStack);
console.log(queueStack.dequeue());
console.log(queueStack.enqueue(4));
console.log(queueStack.isEmpty());
console.log(queueStack.peek());
console.log(queueStack.size());
