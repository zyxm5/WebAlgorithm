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
 * 图的广度优先搜索
 * @param {*} rootList
 * @param {*} value 
 * @param {*} path 
 */
function breadthSearch(rootList, value, path = []) {
    if (rootList == null || rootList.length == 0) {
        return false;
    }
    let arr = [];
    for (let i = 0; i < rootList.length; i++) {
        // 过滤已经判断的节点
        if(path.indexOf(rootList[i]) != -1){
            continue;
        }
        // 添加判断的节点
        path.push(rootList[i]);
        if (rootList[i] && rootList[i].value === value) {
            return true;
        }
        arr = arr.concat(rootList[i].neighbors);
    }
    return breadthSearch(arr, value, path);
}

console.log(breadthSearch([a], 'e'));