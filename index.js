const arr = [2, 4, 6, 1, 3, 5, 8, 9, 7];

// 插入排序将数组分成两部分:排好的和未排好的
// 每次从未排好的部分中取出一个数放在排好的部分中
// 2,4,6,1,3,5,8,9,7
// 2  4,6,1,3,5,8,9,7
// 2,4  6,1,3,5,8,9,7
// 2,4,6  1,3,5,8,9,7
// 1,2,4,6  3,5,8,9,7
// 1,2,3,4,6  5,8,9,7
// 1,2,3,4,5,6  8,9,7
// ...

/**
 * 比较
 * @param {*} a 
 * @param {*} b 
 */
function compare(a, b) {
    return a > b;
}

/**
 * 插入
 * @param {*} arr 
 * @param {*} i 
 * @param {*} j 
 */
function insertAfter(arr, i, j) {
    const temp = arr[j];
    arr.splice(j, 1);
    arr.splice(i, 0, temp);
}

function exchange(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;;
}

/**
 * 排序
 * @param {*} arr 
 */
function insertSort(arr) {
    if (arr == null || arr.length == 0) {
        return;
    }
    // 用与保存已经排好序的最大下标
    let point = -1;

    function insert(index) {
        if (point === -1) {
            point = 0;
        } else {
            // 大于最大的直接push
            if (arr[index] > arr[point]) {

            } else if (arr[index] < arr[0]) {
                // 小于最小的直接放在最小的前面
                insertAfter(arr, 0, index);
            } else {
                // 在已经排好的部分中查找该放置的位置
                let i = 0;
                while (true) {
                    // console.log(arr[i]);
                    if (arr[index] > arr[i] && arr[index] < arr[i + 1]) {
                        insertAfter(arr, i + 1, index);
                        break;
                    }
                    i++;
                }
            }
            point++;
        }
    }
    // 外层循环n次
    for (let i = 0; i < arr.length; i++) {
        insert(i);
    }
}

function insertSort(arr) {
    function _insertSort(index) {
        if (arr == null || arr.length == 0 || index == arr.length) {
            return;
        }
        for (let i = 0; i < index; i++) {
            if (arr[index] < arr[i]) {
                exchange(arr, index, i);
            }
        }
        index++;
        _insertSort(index);
    }
    _insertSort(1);
}

insertSort(arr);
console.log(arr);