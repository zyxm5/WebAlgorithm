function Node(value) {
    this.value = value;
    this.children = [];
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.children.push(b);
a.children.push(c);
a.children.push(d);
b.children.push(f);
b.children.push(e);

/**
 * 树的深度优先搜索
 * @param {*} root 
 * @param {*} value 
 */
function deepSearch(root, value){
    if(root == null){
        return
    }
    if(root.value == value){
        return true;
    }
    let result = false;
    for(let i = 0 ; i < root.children.length; i ++){
        result = deepSearch(root.children[i], value);
        if(result){
            break;
        }
    }
    return result;
}

console.log(deepSearch(a, 'f'));