// Read a description of a data tree from the input
// 1. Implement the data tree structure
// 2. Store the tree
// 3. Compute it's height

const createNode = (data) => ({
  data,
  children: []
});

class Tree {
  constructor() {
    this.root = undefined;
  }

  log(){
    console.log('root', JSON.stringify(this.root, null, 4));
  }

  add(data, parentNodeData) {
    const newNode = createNode(data);
    const isRootAppend = !parentNodeData;

    if (isRootAppend) {
      if (this.root) {
        throw new Error('There is already a item in the root');
      } else {
        this.root = newNode;
        return;
      }
    } else {
      const parentNode = this.find(parentNodeData);
      if (parentNode) {
        parentNode.children.push(newNode);
        return
      } else {
        throw new Error('Couldn\'t find parent with that data');
      }
    }
  }

  // should return the searched Node or undefined if it cannot find it
  find(data) {
    return this.findDFS(
      this.root,
      node => node.data === data
    );
  }

  findDFS(currentNode, fn) {
    if (!currentNode) return;
    if (fn(currentNode)) return currentNode;
    return currentNode.children.reduce((acc, node) => {
      return acc || this.findDFS(node, fn);
    }, undefined)
  }

  depth() {
    return this.getNodeDepth(this.root, 1);
  }

  getNodeDepth(node, currentDepth) {
    // console.log('node', node);
    // console.log('currentDepth', currentDepth);
    if (!node.children.length) return currentDepth;
    const childrenDepthList = node.children.map(n =>
      this.getNodeDepth(n, currentDepth + 1)
    );
    return Math.max(...childrenDepthList);
  }
}

module.exports = Tree;