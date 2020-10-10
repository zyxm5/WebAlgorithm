const arr = [2, 4, 6, 1, 3, 5, 8, 9, 7];

// 选择排序经过每一轮的比较会把当前最值交换到最后面
// 冒泡排序每次比较都会交换，而选择排序是每次比较只记录最值的索引，比较完后每一轮只交换一次
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
function selectSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let key = -1;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (compare(arr[j], arr[j + 1])) {
                key = j;
            }
        }
        if(key !== -1){
            exchange(arr, key, arr.length - i);
        }
    }
}

selectSort(arr);
console.log(arr);