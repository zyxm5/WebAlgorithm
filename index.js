// 问题: 有10000个数,判断某一个数是否在这10000个数中?
// 要求:尽可能性能高

const arr = [];
for (let i = 0; i < 10000; i++) {
    arr[i] = Math.floor(Math.random() * 10000);
}

// 记录查询的次数
let searchNum = 0;

/**
 * 普通查询
 * @param {*} arr   
 * @param {*} value 
 */
function search(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        searchNum++;
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}

/**
 * 节点
 * @param {*} value 
 */
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

/**
 * 构建根节点
 * @param {*} root 
 * @param {*} value 
 */
function buildRoot(root, value) {
    if (root == null) {
        return;
    }
    // 节点中不需要已经存在的值
    if (value == root.value) {
        return
    } else if (value > root.value) {
        // 大于的放在右子树
        if (root.right == null) {
            root.right = new Node(value);
        } else {
            // 如果子树存在,则递归进行构建
            buildRoot(root.right, value)
        }
    } else {
        // 小于的放在左子树
        if (root.left == null) {
            root.left = new Node(value);
        } else {
            // 如果子树存在,则递归进行构建
            buildRoot(root.left, value)
        }
    }
}

/**
 * 构建二叉搜索树-左子树的节点值都比当前节点的值小,右子树的节点值都比当前节点的值大
 * @param {*} arr 
 */
function buildTree(arr) {
    // 严谨性判断
    if (arr == null || arr.length == 0) {
        return null;
    }
    // 默认选取第一个元素为根节点
    const root = new Node(arr[0]);
    // 根据根节点和其他节点的比较关系进行构建
    for (let i = 1; i < arr.length; i++) {
        buildRoot(root, arr[i]);
    }
    return root;
}

/**
 * 在二叉搜索数中查找
 * @param {*} root 
 * @param {*} target 
 */
function treeSearch(root, target) {
    searchNum++;
    if (root == null) {
        return false;
    }
    if (target === root.value) {
        return true
    } else if (target > root.value) {
        // 大于则直接在右子树中查找
        return treeSearch(root.right, target);
    } else {
        // 小于在左子树中查找
        return treeSearch(root.left, target);
    }
}

/**
 * 计算子树的深度
 * @param {*} root 
 */
function countDepth(root) {
    if (root == null) {
        return 0
    }
    let depth = 0;
    // 累加左右子树中深度较大的
    const leftDepth = countDepth(root.left);
    const rightDepth = countDepth(root.right);
    depth += Math.max(leftDepth, rightDepth) + 1;
    return depth;
}

/**
 * 判断一个二叉树是否是平衡二叉树
 * @param {*} root 
 */
function isBalanceTree(root) {
    // 严谨性判断
    if (root == null) {
        // 姑且认为是true吧
        return true;
    }
    // 记录左子树深度
    const leftDepth = countDepth(root.left);
    // 记录右子树深度
    const rightDepth = countDepth(root.right);
    // console.log(leftDepth, rightDepth);
    if (Math.abs(leftDepth - rightDepth) > 1) {
        return false;
    }
    return isBalanceTree(root.left) && isBalanceTree(root.right);
}

/**
 * 左旋转
 * @param {*} root 
 */
function leftRotate(root) {
    // 旋转节点: 当前根节点
    // 新根: 旋转节点的右孩子
    const newRoot = root.right;
    // 变化分支: 新根的左子树
    const changeTree = newRoot.left;
    // 不变分支: 新根的右子树

    // 操作步骤
    // 新根的左孩子为旋转节点
    newRoot.left = root;
    // 旋转节点的右孩子为变化分支
    root.right = changeTree;
    return newRoot;
}

function rightRotate(root) {
    // 旋转节点: 当前根节点
    // 新根: 旋转节点的左孩子
    const newRoot = root.left;
    // 变化分支: 新根的右子树
    const changeTree = newRoot.right;
    // 不变分支: 新根的左子树
    // 操作步骤
    // 新根的右孩子为旋转节点
    newRoot.right = root;
    // 旋转节点的左孩子为变化分支
    root.left = changeTree;
    return newRoot;
}
/**
 * 将一个非平衡二叉树转换为平衡二叉树
 * @param {*} root 
 */
function change(root) {
    if (root == null) {
        return;
    }
    // 如果已经是平衡二叉树了,直接返回
    if (isBalanceTree(root)) {
        return root;
    }
    // 按照后续遍历的顺序,从底层往高层进行
    if (root.left) {
        root.left = change(root.left);
    }
    if (root.right) {
        root.right = change(root.right);
    }
    // 根据左右子树的深度,判断进行左单旋还是右单旋
    const leftDepth = countDepth(root.left);
    const rightDepth = countDepth(root.right);
    if (Math.abs(leftDepth - rightDepth) > 1) {
        if (leftDepth > rightDepth) {
            // 进行右单旋
            // 当变化分支是唯一最深分支时,需要进行双旋,先旋转节点左单旋,再节点右单旋
            const changeTreeDepth = countDepth(root.left.right);
            const leftTreeDepth = countDepth(root.left.left);
            if(changeTreeDepth > leftTreeDepth){
                root.left = leftRotate(root.left);
            }
            root = rightRotate(root);
        } else {
            // 进行左单旋
            // 当变化分支是唯一最深分支时,需要进行双旋,先旋转节点右单旋,再节点左单旋
            const changeTreeDepth = countDepth(root.right.left);
            const rightTreeDepth = countDepth(root.right.right);
            if(changeTreeDepth > rightTreeDepth){
                root.right = rightRotate(root.right);
            }
            root =leftRotate(root);
        }
    }
    return root;
}

const node8 = new Node(8);
const node7 = new Node(7);
const node6 = new Node(6);
const node5 = new Node(5);
const node2 = new Node(2);

node8.left = node7;
node7.left = node6;
node6.left = node5;
node5.left = node2;

const root = buildTree(arr);
// console.log(root);
console.log(treeSearch(root, 1000));
console.log(searchNum);
searchNum = 0;
console.log(treeSearch(change(root), 1000));
console.log(searchNum);
// console.log(leftRotate(node2));