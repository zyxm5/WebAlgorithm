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
 * 快速排序 左闭右开
 * @param {*} arr 
 * @param {*} begin 
 * @param {*} end 
 */
function quickSort(arr, begin = 0, end = arr.length){
    // 默认选择第一个元素为基准元素
    // 设置两个指针,左指针从基准元素的后一个元素开始依次向后,右指针从最后一个元素开始依次向前
    // 当左指针指向的元素大于基准元素时停止,当右指针指向的元素小于基准元素时停止
    // 交换左右指针指向的元素
    // 重复上述步骤,直到left < right 不成立为止
    // 确定基准点 left == right ? right - 1 : right;
    // 交换基准元素与基准点元素的位置
    // 以基准元素为分割线,重复操作左侧和右侧的剩余元素
    if(arr == null){
        return;
    }
    // 至少包含两个元素
    if(end - begin < 2){
        return;
    }
    let left = begin;
    let right = end;
    const base = arr[begin];
    do{
        do{
            left++;
        }
        // 小于时指针接着向前走
        while(left < right && arr[left] < base)
        do{
            right--;
        }
        // 大于时指针接着向前走
        while(left < right && arr[right] > base)
        if(left < right){
            exchange(arr, left, right);
        }
    }while(left < right)
    // 确定分隔点
    const point = left == right ? right - 1 : right;
    if(point > begin){
        exchange(arr, point, begin);
    }
    // 分别对分隔点两侧的元素进行快排
    quickSort(arr, begin, point);
    quickSort(arr, point + 1, end);
}

/**
 * 快速排序,填坑法
 * @param {*} arr 
 */
function quickSort(arr){
    function _quickSort(begin, end){
        if(arr == null || arr.length == 0 || end - begin <= 1){
            return;
        }
        // 默认将第一个元素作为基准点
        const base = arr[begin];
        let left = begin;
        let right = end;
        while(left < right){
            // 右指针向前移动,直到碰到小于基准的元素
            while(left < right && arr[right] > base){
                right --;
            }
            arr[left] = arr[right];
            // 左指针向后移动,直到碰到大于基准的元素
            while(left < right && arr[left] < base){
                left ++;
            }
            arr[right] = arr[left]; 
        }
        arr[left] = base;
        _quickSort(begin, left - 1);
        _quickSort(left + 1, end);
    }
    _quickSort(0, arr.length - 1);
}

quickSort(arr);

console.log(arr);