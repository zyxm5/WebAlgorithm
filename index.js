let num = 0;
/**
 * 插入查找
 * 前提条件,数组是有序的,而且数组的元素之间的差值基本相同
 * 满足等式(目标元素的下标 - 最小下标) / (最大下标 - 最小下标) = (目标元素的值 - 最小下标的值) / (最大下标的值 - 最小下标的值)
 * 转换可得 目标元素得下标 = (目标元素的值 - 最小下标的值) / (最大下标的值 - 最小下标的值) * (最大下标 - 最小下标) + 最小下标
 * @param {*} arr 
 * @param {*} target 
 */
function interplateSearch(arr, target){
    function _interplateSearch(left, right){
        num++;
        if(arr == null || arr.length === 0 || left < 0 || right > arr.length + 1 || left > right){
            return false;
        }
        if(left === right){
            return arr[left] === target;
        }
        // 与二分查找唯一的区别
        // 确定范围边界
        // 目标元素得下标 = (目标元素的值 - 最小下标的值) / (最大下标的值 - 最小下标的值) * (最大下标 - 最小下标) + 最小下标
        const bound = Math.ceil((target - arr[left]) / (arr[right] - arr[left]) * (right - left) + left);
        if(target > arr[bound]){
            return _interplateSearch(bound + 1, right);
        }else if(target < arr[bound]){
            return _interplateSearch(left, bound - 1);
        }else {
            return true;
        }
    }
    return _interplateSearch(0, arr.length - 1);
}

// const arr = [1,4,7,10];
const arr = [];
for(let i = 0 ; i < 100; i++){
    arr.push(i + Math.round(Math.random() + 1));
}
console.log(arr);
console.log(interplateSearch(arr, 90));
console.log(num);