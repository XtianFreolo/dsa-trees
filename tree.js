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
    let evenNumbers === node.val % 2;
    let evenTotal = 0;
    
    function dfs(node) {
      if (total === evenNumbers)
            }
    }


  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {

  }
}

module.exports = { Tree, TreeNode };
