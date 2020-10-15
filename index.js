function Node(value){
    this.value = value;
    this.next = null;
}

/**
 * 获取链表的长度
 */
Node.prototype.getLength = function(){
    if(this.next == null){
        return 1;
    }
    return 1 + this.next.getLength();
}

/**
 * 根据下标获取元素中存放的数据
 */
Node.prototype.get = function(index){
    if(index < 0){
        return;
    }
    if(index == 0){
        return this.value;
    }
    return this.next.get(--index);
}

/**
 * 根据下标设置元素中存放的数据
 */
Node.prototype.set = function(index, value){
    if(index < 0){
        return;
    }
    if(index == 0){
        this.value = value;
    }
    return this.next.set(--index, value);
}

/**
 * 在链表的某一个节点后面加入新的节点
 */
Node.prototype.insertAfter = function(originNode, value){
    const newNode = new Node(value);
    newNode.next = originNode.next;
    originNode.next = newNode;
}

/**
 * 在链表末尾加入一个新节点
 */
Node.prototype.push = function(value){
    if(this.next == null){
        this.next = new Node(value);
    }else{
        this.next.push(value);
    }
}

/**
 * 删除一个节点
 */
Node.prototype.remove = function(value){
    if(this.next == null){
        return;
    }
    if(this.next.value == value){
        this.next = this.next.next;
    }else{
        this.next.remove(value);
    }
}

/**
 * 链表的逆序
 */
Node.prototype.reverse = function(){
    let root = this;
    if(root.next == null){
        return;
    }
    if(root.next.next == null){
        root.next.next = root;
        return root.next;
    }
    const result = root.next.reverse();
    root.next.next = root;
    root.next = null;
    return result;
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

/**
 * 遍历链表
 * @param {*} root 
 */
function bianli(root){
    if(root == null){
        return;
    }
    console.log(root.value);
    bianli(root.next);
}

// bianli(a);
// console.log(c.getLength());
// console.log(a.get(3));
// a.set(3, 'f');
// console.log(a.get(3));
const g = new Node('g');
// a.insertAfter(c, g);
// console.log(c);
// a.push(g);
// console.log(d);
a.remove('c');
console.log(a);
// console.log(a.reverse());