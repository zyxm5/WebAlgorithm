const arr = [2, 4, 6, 1, 3, 5, 8, 9, 7];

// 冒泡排序经过每一轮的比较会把当前最值交换到最后面
// 2,4,6,1,3,5,8,9,7

/**
 * 比较
 * @param {*} a 
 * @param {*} b 
 */
function compare(a, b) {
    return a > b;
}

/**
 * 交换
 * @param {*} arr 
 * @param {*} i 
 * @param {*} j 
 */
function exchange(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

/**
 * 排序
 * @param {*} arr 
 */
function bubbleSort(arr) {
    if(!arr || arr.length <= 1) {
        return;
    }
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (compare(arr[j], arr[j + 1])) {
                exchange(arr, j, j + 1);
            }
        }
    }
}

bubbleSort(arr);
console.log(arr);