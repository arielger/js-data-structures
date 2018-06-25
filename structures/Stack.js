class Stack {
  constructor(...items) {
    this.array = [...items];
  }

  push(element) {
    this.array.push(element);
  }

  top() {
    return this.array[this.array.length - 1];
  }

  pop() {
    return this.array.pop();
  }

  empty() {
    return this.array.length === 0;
  }
}

module.exports = Stack;
