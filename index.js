// 找零问题
// 假设有一个小店需要给客户找46分钱，现在货柜里有25分，10分，5分和1分
// 请问怎么样才能保证数额正确而且硬币数最少

// 通过求得局部的最优解，最终累加起来得到最终全局的最优解
// 优点：效率高
// 缺点：局部最优解累加起来不一定是全局最优解

/**
 * 贪心算法
 * @param {*} total 
 * @param {*} denos 
 */
// function change(total, denos) {
//     if (total <= 0) {
//         return [];
//     }
//     let best = 0;
//     for (let i = 0; i < denos.length; i++) {
//         if (denos[i] > best && denos[i] <= total) {
//             best = denos[i];
//         }
//     }
//     let result = [best];
//     total -= best;
//     return result.concat(change(total, denos));
// }

/**
 * 精确的找零问题
 * @param {*} total 
 * @param {*} denos 
 */
function change(total, denos){
    const cache = [];
    function _change(total, index){
        if(total === 0){
            return [];
        }
        if(total < 0 || !denos[index]){
            return false;
        }
        // 判断缓存中是否存在
        for(let i = 0; i < cache.length; i++){
            if(cache[i].total === total && cache[i].index === index){
                return cache[i].result;
            }
        }
        const deno = denos[index];
        // 如果total等于第一张面值，直接返回第一个面值，结束
        // 如果total小于第一张面值，找后续的面值
        // 如果total大于第一张面值，分为找和不找，分别求解，比较后返回结果
        let result;
        if(total === deno){
            result = [deno];
        }else if(total < deno){
            result = _change(total, index + 1);
        }else{
            let result1 = _change(total - deno, index);
            const result2 = _change(total, index + 1);
            if(result1 === false && result2 === false){
                result = false;
            }else if(result1 !== false && result2 === false){
                result = [deno].concat(result1);
            }else if(result1 === false && result2 != false){
                result = result2;
            }else {
                result1 = [deno].concat(result1);
                result = result1.length > result2.length ? result2 : result1;
            }
            cache.push({
                total,
                index,
                result
            });
        }
        return result;
    }
    const result = _change(total, 0);
    console.log(cache);
    return result;
}

// console.log(change(46, [25, 10, 5, 1]));
console.log(change(51, [30, 25, 10, 1])); // [ 30, 10, 10, 1 ]，但最优解其实是[25,25,1]