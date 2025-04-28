/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;

    let total = 0;

    function dfs(node) {
      total += node.val;
      for (let child of node.children) {
        dfs(child);
      }
    }

    dfs(this.root);
    return total;

  }

  /** countEvens(): count all of the nodes in the tree with even values. */


  countEvens() {
    if (!this.root) return 0;

    let evenTotal = 0; 

    function dfs(node) {
      if (node.val % 2 === 0) {
        evenTotal += 1;
      }
      for (let child of node.children) {
        dfs(child);
      }
    }

    dfs(this.root);
    return evenTotal;

  }
  



  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    let numGreaterTotal = 0;

    function dfs(node) {
      if (node.val > lowerBound) {
        numGreaterTotal += 1;
      }
      for (let child of node.children) {
        dfs(child);
      }
    }

    dfs(this.root);
    return numGreaterTotal;
  }
}

module.exports = { Tree, TreeNode };
