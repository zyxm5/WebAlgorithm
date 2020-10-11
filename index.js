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
c1.left = g1;
c1.right = g1;

/**
 * 
 * @param {*} root1 
 * @param {*} root2 
 * @param {*} diffList diff记录
 */
function diffTree(root1, root2, diffList) {
    if (root1 == root2) {
        return diffList;
    } else if (root1 == null && root2) {
        diffList.push({
            type: '新增',
            origin: null,
            now: root2
        })
    } else if (root1 && root2 == null) {
        diffList.push({
            type: '删除',
            origin: root1,
            now: null
        })
    } else if (root1.value !== root2.value) {
        diffList.push({
            type: '修改',
            origin: root1,
            now: root2
        });
        diffTree(root1.left, root2.left, diffList);
        diffTree(root1.right, root2.right, diffList);
    }
    diffTree(root1.left, root2.left, diffList);
    diffTree(root1.right, root2.right, diffList);
}
const diffList = [];
diffTree(a, a1, diffList);
console.log(diffList);