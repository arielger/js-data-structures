// min heap
// Should be a complete tree

class Heap {
  constructor(items, transformToHeap) {
    this.array = items;
    if (!transformToHeap) return;

    const initialIndex = Math.floor(this.array.length / 2) - 1;

    for (let i = initialIndex; i >= 0; i--) {
      this.siftDown(i);
    }
  }

  getParent(i) {
    const parentIndex = Math.floor((i - 1) / 2);
    return this.array[parentIndex];
  }

  getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  getLeftChild(i) {
    return this.array[this.getLeftChildIndex(i)];
  }

  getRightChildIndex(i) {
    return this.getLeftChildIndex(i) + 1;
  }

  getRightChild(i) {
    return this.array[this.getRightChildIndex(i)];
  }

  siftDown(i) {
    const element = this.array[i];

    // Get the values of the left and right children
    const leftChild = this.getLeftChild(i);
    const rightChild = this.getRightChild(i);

    if (!(leftChild < element) && !(rightChild < element)) {
      return;
    }

    const indexToSwap =
      leftChild < rightChild
        ? this.getLeftChildIndex(i)
        : this.getRightChildIndex(i);

    this.swap(i, indexToSwap);
    this.siftDown(indexToSwap);
  }

  siftUp(i) {}

  swap(i, j) {
    const iValue = this.array[i];
    this.array[i] = this.array[j];
    this.array[j] = iValue;
  }

  getMax() {}

  insert(i) {
    // insert in the leftmost vacant position in the last level
    // should sift up the new element
  }

  extractMax() {
    // replace root by last leaf
  }

  changePriority(i, p) {
    // changed element should siftDown or siftUp depending on the new priority
  }

  remove(i) {
    changePriority(i, Infinity);
    this.extractMax();
  }

  getNodesWithChildren() {
    return this.array.slice(0, Math.floor(this.array.length / 2));
  }

  checkMinHeap() {
    return this.getNodesWithChildren().every(
      (value, index) =>
        value <= this.getLeftChild(index) &&
        (this.getRightChild(index) === undefined
          ? true
          : value <= this.getRightChild(index))
    );
  }
}

module.exports = Heap;
