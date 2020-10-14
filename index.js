function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

/**
 * 二叉树的深度优先搜索
 * @param {*} root 
 * @param {*} value 
 */
function deepSearch(root, value){
    if(root == null){
        return false;
    }
    if(root.value === value){
        return root;
    }
    return deepSearch(root.left, value) || deepSearch(root.right, value);
}

console.log(deepSearch(a, 'n'));