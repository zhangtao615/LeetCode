const maxDepth = (root) => {
    if(!root) return 0;
    let right = maxDepth(root.right);
    let left = maxDepth(root.left);
    return Math.max(right,left) + 1;
}