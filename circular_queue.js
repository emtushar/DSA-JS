const CircularQueue = function (k) {
  this.queue = [];
  this.size = k;
};

CircularQueue.prototype.enqueue = function (value) {
  if (this.queue.length === this.size) {
    return false;
  }
  this.queue.push(value);
  return true;
};
CircularQueue.prototype.dequeue = function () {
  if (this.queue.length < 1) {
    return false;
  }
  return this.queue.shift();
};
CircularQueue.prototype.front = function () {
  if (this.queue.length === 0) {
    return -1;
  }
  return this.queue[0];
};
CircularQueue.prototype.rear = function () {
  if (this.queue.length === 0) {
    return -1;
  }
  return this.queue[this.queue.length - 1];
};

CircularQueue.prototype.capacity = function () {
  if (this.queue.length < 1) {
    return -1;
  }
  return this.queue.length;
};
CircularQueue.prototype.isEmpty = function () {
  return this.queue.length === 0;
};

let circularQueue = new CircularQueue(3);

console.log(circularQueue.enqueue(3));
console.log(circularQueue.enqueue(7));
console.log(circularQueue.enqueue(4));
console.log(circularQueue.enqueue(5));
console.log(circularQueue.front());
console.log(circularQueue.rear());
console.log(circularQueue.capacity());
console.log(circularQueue.dequeue());
console.log(circularQueue.dequeue());
console.log(circularQueue.front());
console.log(circularQueue.rear());
console.log(circularQueue.capacity());
console.log(circularQueue.isEmpty());
console.log(circularQueue.dequeue());
console.log(circularQueue.isEmpty());
