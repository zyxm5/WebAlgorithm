// 问题: 有10000个数,判断某一个数是否在这10000个数中?
// 要求:尽可能性能高

const arr = [];
for (let i = 0; i < 6; i++) {
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
    console.log(depth);
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

const root = buildTree(arr);
console.log(root);
// console.log(treeSearch(root, 1000));
// console.log(searchNum);
console.log(isBalanceTree(root));