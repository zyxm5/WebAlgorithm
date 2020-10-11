const arr = [2, 4, 6, 1, 3, 5, 8, 9, 7];

// 快速排序 首先选第一个元素为基准，建立两个指针，左指针指向第二个元素，右指针指向最后一个元素
// 从左向右，寻找大于基准的元素，停止
// 从右向左，寻找小于基准的元素，停止
// 交换元素位置，指针接着运动，直到左指针大于右指针
// 将基准元素与最终指针指向的元素进行交换
// 以目前基准元素作为分隔，左侧和右侧数组继续之前的操作
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
 * 排序 左闭右开
 * @param {*} arr 
 * @param {*} begin 
 * @param {*} end 
 */
function quickSort(arr, begin, end) {
    if (!arr || arr.length <= 1) {
        return;
    }
    // 子数组至少有两项
    if (end - begin <= 1) {
        return;
    }
    const key = arr[begin];
    let left = begin;
    let right = end;
    do {
        do left++;
        while (left < right && arr[left] < key)
        do right--;
        while (left < right && arr[right] > key)
        if (left < right) {
            exchange(arr, left, right);
        }
    } while (left < right)
    // 判断需要交换基准的位置
    // 左右指针最终可能的情况，
    // 相等：最后一次没找到可以交换的
    // 不相等：最后一次找到可以交换的，交换后，left>right 或者是一次都没找到
    const swapPoint = left === right ? right - 1 : right;
    exchange(arr, begin, swapPoint);
    quickSort(arr, begin, swapPoint);
    quickSort(arr, swapPoint + 1, end);

}

quickSort(arr, 0, arr.length);
console.log(arr);