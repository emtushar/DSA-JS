// class Queue {
//   constructor(queue) {
//     this.queue = queue;
//   }
//   enqueue(elem) {
//     this.queue.push(elem);
//     return this.queue;
//   }
//   dequeue() {
//     this.queue.shift();
//     return this.queue;
//   }
//   isEmpty() {
//     return this.queue.length === 0;
//   }
//   peek() {
//     return this.queue[0];
//   }
//   size() {
//     return this.queue.length;
//   }
// }

// const queue = new Queue([3, 6, 7, 9, 1]);

// console.log(queue);
// console.log(queue.dequeue());
// console.log(queue.enqueue(4));
// console.log(queue.isEmpty());
// console.log(queue.peek());
// console.log(queue.size());

//Approach algoagg

class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(elem) {
    this.items.push(elem);
    return this.items;
  }
  dequeue() {
    if (this.items.length === 0) {
      return "underflow";
    }
    this.items.shift();
    return this.items;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  front() {
    return this.items[0];
  }
  size() {
    return this.items.length;
  }
  print() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

const queue = new Queue();
console.log(queue.enqueue(1));
console.log(queue.enqueue(6));
console.log(queue.enqueue(2));
console.log(queue.enqueue(7));
console.log(queue.enqueue(3));
console.log(queue);
console.log(queue.dequeue());
console.log(queue.enqueue(4));
console.log(queue.isEmpty());
console.log(queue.front());
console.log(queue.size());
console.log(queue.print());
