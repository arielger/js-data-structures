const Tree = require("./Tree");

// add

test("should be able to add root element to Tree", () => {
  const tree = new Tree();
  tree.add('ceo');
  expect(tree.find('ceo')).toEqual({
    data: 'ceo',
    children: []
  });
});

test("should be able to add nested element to Tree", () => {
  const tree = new Tree();
  tree.add('ceo');
  tree.add('cto', 'ceo');
  expect(tree.find('cto')).toEqual({
    data: 'cto',
    children: []
  });
});

// find

test("should not find element that is not in the tree", () => {
  const tree = new Tree();
  tree.add('ceo');
  tree.add('cto', 'ceo');
  expect(tree.find('cmo')).toEqual(undefined);
})

test('should find element deep in the tree', () => {
  const tree = new Tree();
  tree.add('ceo');
  tree.add('cfo', 'ceo');
  tree.add('vp', 'cfo');
  expect(tree.find('vp')).toEqual({
    data: 'vp',
    children: []
  });
})

test('should find element deep in the tree', () => {
  const tree = new Tree();
  tree.add('ceo');
  tree.add('cfo', 'ceo');
  tree.add('vp', 'cfo');
  tree.add('accountant', 'vp');
  tree.add('accountant jr', 'accountant');
  expect(tree.find('accountant jr')).toEqual({
    data: 'accountant jr',
    children: []
  });
})

// depth

test("should get depth 1 in tree with only root element", () => {
  const tree = new Tree();
  tree.add('ceo');
  expect(tree.depth()).toBe(1);
})

test("should get depth 2 in tree with two elems", () => {
  const tree = new Tree();
  tree.add('ceo');
  tree.add('cto', 'ceo');
  expect(tree.depth()).toBe(2);
})

test("should get depth 3", () => {
  const tree = new Tree();
  tree.add('ceo');
  tree.add('cto', 'ceo');
  tree.add('project manager', 'cto');
  expect(tree.depth()).toBe(3);
})

test("should get depth 4", () => {
  const tree = new Tree();
  tree.add('ceo');
  tree.add('cfo', 'ceo');
  tree.add('vp of finance', 'cfo');
  tree.add('accountant', 'vp of finance');
  expect(tree.depth()).toBe(4);
})