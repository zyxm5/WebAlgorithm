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
 * 前序遍历
 * @param {*} root 
 */
function sort1(root) {
    if (!root) {
        return;
    }
    console.log(root.value);
    sort1(root.left);
    sort1(root.right);
}

/**
 * 中序遍历
 * @param {*} root 
 */
function sort2(root) {
    if (!root) {
        return;
    }
    sort2(root.left);
    console.log(root.value);
    sort2(root.right);
}

/**
 * 后续遍历
 * @param {*} root 
 */
function sort3(root) {
    if (!root) {
        return;
    }
    sort3(root.left);
    sort3(root.right);
    console.log(root.value);
}

// sort1(a); a b d e c f g
// sort2(a); d b e a f c g
// sort3(a); d e b f g c a

// 前序遍历结果
const arr1 = ['a', 'b', 'd', 'e', 'c', 'f', 'g'];
// 中序遍历结果
const arr2 = ['d', 'b', 'e', 'a', 'f', 'c', 'g'];
// 后序遍历结果
const arr3 = ['d', 'e', 'b', 'f', 'g', 'c', 'a'];

/**
 * 根据前序遍历和后续遍历的结果还原二叉树
 * @param {*} arr1 
 * @param {*} arr2 
 */
function test(arr1, arr2) {
    // 严谨性判断
    if(!arr1 || !arr2 || arr1.length === 0 || arr2.length === 0 || arr1.length !== arr2.length){
        return null;
    }
    const root = new Node(arr1[0]);
    const index = arr2.indexOf(arr1[0]);
    const arr2Left = arr2.slice(0, index);
    const arr2Right = arr2.slice(index + 1);
    const arr1Left = arr1.slice(1, arr2Left.length + 1);
    const arr1Right = arr1.slice(arr1Left.length + 1);
    root.left = test(arr1Left, arr2Left);
    root.right = test(arr1Right, arr2Right);
    return root;
}
/**
 * 根据后序遍历和后续遍历的结果还原二叉树
 * @param {*} arr1 
 * @param {*} arr2 
 */
function test2(arr1, arr2) {
    // 严谨性判断
    if(!arr1 || !arr2 || arr1.length === 0 || arr2.length === 0 || arr1.length !== arr2.length){
        return null;
    }
    const root = new Node(arr1[arr1.length - 1]);
    const index = arr2.indexOf(arr1[arr1.length - 1]);
    const arr2Left = arr2.slice(0, index);
    const arr2Right = arr2.slice(index + 1);
    const arr1Left = arr1.slice(0, arr2Left.length);
    const arr1Right = arr1.slice(arr1Left.length, -1);
    root.left = test2(arr1Left, arr2Left);
    root.right = test2(arr1Right, arr2Right);
    return root;
}
console.log(test2(arr3,arr2));