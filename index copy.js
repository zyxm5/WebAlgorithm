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
c.children.push(e);
c.children.push(f);


/**
 * 普通树的广度优先搜索
 * @param {*} rootList
 * @param {*} value 
 */
function breadthSearch(rootList, value){
    if(rootList == null || rootList.length == 0){
        return false;
    }
    let arr = [];
    for(let i = 0; i < rootList.length; i++){
        if(rootList[i] && rootList[i].value === value){
            return true;
        }
        arr = arr.concat(rootList[i].children);
    }
    return breadthSearch(arr, value);
}

console.log(breadthSearch([a], 'f'));