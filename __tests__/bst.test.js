import BSTNode from '../src/bst-node.js';
import BST from '../src/bst.js'

describe('binarySearchTree', ()=> {
  let bst;
  let rootNode;
  const pbst = new BST();

  beforeEach(()=> {
    bst = new BST();
    rootNode = new BSTNode(36);
    pbst.insertNode(new BSTNode(4));
    pbst.insertNode(new BSTNode(2));
    pbst.insertNode(new BSTNode(6));
    pbst.insertNode(new BSTNode(1));
    pbst.insertNode(new BSTNode(3));
    pbst.insertNode(new BSTNode(5));
    pbst.insertNode(new BSTNode(7));  
  });

  test('should initialize a binary search tree with a root of null', ()=> {
    expect(bst.root).toEqual(null);
  });

  test('should create a new root node', ()=> {
    bst.insertNode(rootNode);
    expect(bst.root).toEqual(rootNode)
  });

  test('should add a child node to the right of the root node', ()=> {
    bst.insertNode(rootNode);
    let newNode = new BSTNode(22);
    bst.insertNode(newNode);
    expect(rootNode.left.data).toEqual(22);
  });

  test('should add a child node to the left of the root node', () => {
    bst.insertNode(rootNode);
    let newNode = new BSTNode(48);
    bst.insertNode(newNode);
    expect(rootNode.right.data).toEqual(48);
  });

  test('should add a child to the left of a child node', () => {
    bst.insertNode(rootNode);
    let node2 = new BSTNode(22);
    bst.insertNode(node2);
    let node3 = new BSTNode(11);
    bst.insertNode(node3);
    expect(rootNode.left.left.data).toEqual(11);
  });
  
  test('should add a child to the right of a child node', () => {
    bst.insertNode(rootNode);
    let node2 = new BSTNode(48);
    bst.insertNode(node2);
    let node3 = new BSTNode(72);
    bst.insertNode(node3);
    expect(rootNode.right.right.data).toEqual(72);
  });

  test('it should add a child to left or right of a node', () => {
    bst.insertNode(rootNode);
    let node2 = new BSTNode(22);
    bst.insertNode(node2);
    let node3 = new BSTNode(33);
    bst.insertNode(node3);
    expect(rootNode.left.right.data).toEqual(33);
  });

  test('it should not add duplicate nodes', () => {
    bst.insertNode(rootNode);
    let node2 = new BSTNode(36);
    expect(bst.insertNode(node2)).toEqual({"root": {"data": 36, "left": null, "right": null}});
  });

  test('it should return true if the root node is equal to 4', ()=> {
    expect(pbst.search(4)).toEqual(true);
  });

  test('it should return false if the root node is not equal to 31', ()=> {
    expect(pbst.search(31)).toEqual(false);
  });

  test('it should return true if the first child node on the left is equal to 2', () => {
    expect(pbst.search(2)).toEqual(true);
  });

  test('it should return if the value 0 is not in the tree', ()=> {
    expect(pbst.search(0)).toEqual(false);
  });

  test('it should return true if the tree includes 7', ()=> {
    expect(pbst.search(7)).toEqual(true);
  });

  test('it should return true if the tree includes 5', ()=> {
    expect(pbst.search(5)).toEqual(true);
  });

  test('it should return false if the node to be removed does not exist in the tree', ()=> {
    expect(pbst.remove(8)).toEqual(false);
  });

  test('it should remove a leaf node with the input value', ()=> {
    pbst.remove(7)
    // expect(pbst.root.right.right.data).toEqual(null);
    expect(pbst.search(7)).toEqual(false)
  });

  test('it should remove the root if it is the only node', () => {
    let robst = new BST();
    let rootNode = new BSTNode(1);
    robst.insertNode(rootNode);
    robst.search(1);
    robst.remove(1);
    expect(robst.root).toEqual(null);
  }); 

  test('it should remove a node with only one child', ()=> {
    pbst.remove(5);
    pbst.remove(6);
    expect(pbst.root.right.data).toEqual(7)
  })

});