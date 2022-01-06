export default class BST {
  constructor() {
    this.root = null
  }

  insertNode(insertedNode) {
    if (this.root === null) {
      this.root = insertedNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.data > insertedNode.data) {
          if (currentNode.left === null) {
            currentNode.left = insertedNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else if (currentNode.data < insertedNode.data) {
          if (currentNode.right === null) {
            currentNode.right = insertedNode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        } else {
          return this;
        }
      }
    }
  }

  search(value) {
    if (this.root.data === value) {
      return true;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.data === value) {
          return true;
        } else if (currentNode.data > value) {
          currentNode = currentNode.left;
        } else if (currentNode.data < value) {
          currentNode = currentNode.right;
        }
        if (currentNode === null) {
          return false
        }
      }
    }
  }

  remove(nodeToBeDeleted) {
    if (this.search(nodeToBeDeleted) === false) {
      return false
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.data > nodeToBeDeleted) {
          if (currentNode.left.data === nodeToBeDeleted) {
            currentNode.left = null;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else if (currentNode.data < nodeToBeDeleted) {
          if (currentNode.right.data === nodeToBeDeleted) {
            currentNode.right = null;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        } else {
          return this;
        }
      }
    }
  }
}
