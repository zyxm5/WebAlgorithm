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
    if(!arr || arr.length <= 1){
        return;
    }
    for (let i = 0; i < arr.length - 1; i++) {
        // 将每次的最后一位作为key
        let key = arr.length - i - 1;
        for (let j = 0; j < arr.length - i - 1; j++) {
            // 依次和key进行比较，满足条件则更新key
            if (compare(arr[j], arr[key])) {
                key = j;
            }
        }
        if(key !== arr.length - i - 1){
            exchange(arr, key, arr.length - i - 1);
        }
    }
}

selectSort(arr);
console.log(arr);