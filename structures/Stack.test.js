const Stack = require("./Stack");

test("should add a key to the collection when calling Push", () => {
  const stack = new Stack(); // Create an empty stack
  stack.push(1);

  const result = stack.top();
  const expected = 1;
  expect(result).toBe(expected);
});

test("should get top item when calling Top", () => {
  const stack = new Stack(1, 2, 3);
  const result = stack.top();
  const expected = 3;
  expect(result).toBe(expected);
});

// @todo: top -> what happens when it's empty???

test("should remove and return top item when calling Pop", () => {
  const stack = new Stack(2);
  const popedElem = stack.pop();
  expect(popedElem).toBe(2);
  expect(stack.empty()).toBe(true);
});

test("should be empty when initialized with no items", () => {
  const stack = new Stack();
  const result = stack.empty();
  const expected = true;
  expect(result).toBe(expected);
});

test("shoud not be empty when initialized with an item", () => {
  const stack = new Stack(1);
  const result = stack.empty();
  const expected = false;
  expect(result).toBe(expected);
});
