function Node(value) {
    this.value = value;
    this.neighbors = [];
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');

a.neighbors.push(b);
a.neighbors.push(c);
b.neighbors.push(a);
b.neighbors.push(c);
b.neighbors.push(d);
c.neighbors.push(a);
c.neighbors.push(b);
c.neighbors.push(d);
d.neighbors.push(c);
d.neighbors.push(b);
d.neighbors.push(e);
e.neighbors.push(d);

/**
 * 图的深度优先搜索
 * @param {*} root 
 * @param {*} value 
 * @param {*} path 
 */
function deepSearch(root, value, path = []){
    if(root == null){
        return
    }
    // 过滤掉已经判断的节点
    if(path.indexOf(root) != -1){
        return false;
    }
    if(root.value == value){
        return true;
    }
    // 保存已经判断的节点
    path.push(root);
    let result = false;
    for(let i = 0 ; i < root.neighbors.length; i ++){
        result = deepSearch(root.neighbors[i], value, path);
        if(result){
            break;
        }
    }
    return result;
}

console.log(deepSearch(a, 'c'));