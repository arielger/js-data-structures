const Heap = require("./Heap");

test("should swap two elements in the array", () => {
  const heap = new Heap([1, 2, 3]);
  heap.swap(0, 1);
  expect(heap.array).toEqual([2, 1, 3]);

  heap.swap(1, 2);
  expect(heap.array).toEqual([2, 3, 1]);
});

test("should sift down an element", () => {
  const heap = new Heap([9, 3, 2, 12, 1, 5, 1]);
  heap.siftDown(2);
  expect(heap.array).toEqual([9, 3, 1, 12, 1, 5, 2]);

  heap.siftDown(1);
  expect(heap.array).toEqual([9, 1, 1, 12, 3, 5, 2]);
});

test("should check that the min-heap property is satisfied", () => {
  const heap1 = new Heap([1, 2, 3, 17, 19, 36, 7, 25, 100]);
  expect(heap1.checkMinHeap()).toBe(true);

  const heap2 = new Heap([4, 5, 6, 2, 9]);
  expect(heap2.checkMinHeap()).toBe(false);

  const heap3 = new Heap([3, 9999, 9, 6, 8, 20, 10]);
  expect(heap3.checkMinHeap()).toBe(false);
});

test("should turn array into heap", () => {
  const heap1 = new Heap([10, 2, 3, 4, 5, 6, 7], true);
  expect(heap1.array).toEqual([2, 4, 3, 10, 5, 6, 7]);

  const heap2 = new Heap([16, 14, 10, 8, 9], true);
  expect(heap2.array).toEqual([8, 9, 10, 14, 16]);
});
