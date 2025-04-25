class Stack {
  constructor() {
    this.stack = [];
  }
  isEmpty() {
    if (this.stack.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  peek() {
    if (this.stack.length > 0) {
      return this.stack[this.stack.length - 1];
    }
    return "Stack is Empty";
  }
  push(elem) {
    this.stack.push(elem);
    return this.stack;
  }
  pop() {
    if (this.stack.length > 0) {
      this.stack.pop();
      return this.stack;
    } else {
      return "There is no element to pop";
    }
  }
  size() {
    return this.stack.length;
  }
  print() {
    for (let i = 0; i < this.stack.length; i++) {
      console.log(this.stack[i]);
    }
  }
}

const stack = new Stack();

console.log(stack.push(3));
console.log(stack.isEmpty());
console.log(stack.push(5));
console.log(stack.peek());
console.log(stack.size());
console.log(stack.pop());
console.log(stack.push(4));
console.log(stack.push(9));
stack.print();
