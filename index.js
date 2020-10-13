function Node(value) {
    this.value = value;
    this.next = null;
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
 * 逆置链表
 * @param {*} root 
 */
function niZhi(root){
    if(root == null){
        return;
    }
    // 取出倒数第二项
    if(root.next.next == null){
        // 将最后一项的next赋值为倒数第二项
        root.next.next = root;
        // 返回最后一项
        return root.next;
        // root.next = null;
    }
    // 其他项
    const result = niZhi(root.next);
    // 下一项的next赋值为该项
    root.next.next = root;
    // 该项的next赋值为null
    root.next = null;
    return result;
}

const last = niZhi(a);
console.log(last);

