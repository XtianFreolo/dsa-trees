/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    let queue = [{ node: this.root, depth: 1 }];

    while (queue.length > 0) {
      let { node, depth } = queue.shift();

      if (!node.left && !node.right) {
        return depth;
      }

      if (node.left) queue.push({ node: node.left, depth: depth + 1});
      if (node.right) queue.push({ node: node.right, depth: depth + 1});


    }

  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    let queue = [{ node: this.root, depth: 1 }];
    let maxDepth = 0;

    while (queue.length > 0) {
      let { node, depth } = queue.shift(); 

      if (depth > maxDepth) {
        maxDepth = depth;
      }

      if (node.left) queue.push({ node: node.left, depth: depth + 1 });
      if (node.right) queue.push({ node: node.right, depth: depth + 1 });

    }
    return maxDepth;
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = -Infinity;

    function dfs(node) {
      if (!node) return 0;

      let leftSum = Math.max(0, dfs(node.left));
      let rightSum = Math.max(0, dfs(node.right));

      let pathSum = node.val + leftSum + rightSum;

      result = Math.max(result, pathSum);

      return node.val + Math.max(leftSum, rightSum); 
    }

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;
  
    let queue = [this.root];
    let closest = null;
  
    while (queue.length > 0) {
      let current = queue.shift();
  
      // If current node's value is greater than lowerBound
      if (current.val > lowerBound) {
        // If we don't have a closest yet or current is smaller
        if (closest === null || current.val < closest) {
          closest = current.val;
        }
      }
  
      // Add all children to the queue
      for (let child of current.children) {
        queue.push(child);
      }
    }
  
    return closest;
  }
  
  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
