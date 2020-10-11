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
 * 广度优先搜索
 * @param {*} rootList
 * @param {*} value 
 */
function breadthSearch(rootList, value){
    if(root == null || rootList.length == 0 || value == null){
        return;
    }
    const arr = [];
    for(let i = 0; i < rootList.length; i++){
        if(rootList[i] && rootList[i].value === value){
            return rootList[i];
        }
        arr.push(rootList[i].left);
        arr.push(rootList[i].right);
    }
    return breadthSearch(arr, value);
}

console.log(breadthSearch([a], 'g'));