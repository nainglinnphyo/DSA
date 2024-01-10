class TreeNode {
     constructor(value) {
          this.value = value;
          this.left = null;
          this.right = null;
     }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

console.log(root)