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

const a1 = new Node('a');
const b1 = new Node('b');
const c1 = new Node('c');
const d1 = new Node('d');
const e1 = new Node('e');
const f1 = new Node('f');
const g1 = new Node('g');

a1.left = b1;
a1.right = c1;
b1.left = d1;
b1.right = e1;
c1.left = f1;
// c1.right = g1;

/**
 * 二叉树的比较
 * @param {*} root1 
 * @param {*} root2 
 */
function compareTree(root1, root2){
    if(root1 == root2){
        return true
    }
    if(root1 == null && root2 || root && root2 == null){
        return false;
    }
    if(root1.value !== root2.value){
        return false;
    }
    // 这里是没有考虑左子树和右子树的位置的
    const leftBool = compareTree(root1.left, root2.left);
    const rightBool = compareTree(root1.right, root2.right);
    return leftBool && rightBool;
}


console.log(compareTree(a, a1));