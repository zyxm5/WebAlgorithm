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
let num = 0;
/**
 * 背包问题，给定背包容量和物品，怎样能保证背包中放入的物品价值最高，每个物品只能装一次
 * @param {*} total 
 * @param {*} objects 
 */
function package(total, objects){
    const cache = [];
    function _package(total, index){
        num++;
        if(total === 0 || objects.length === 0 || !objects[index]){
            return [];
        }
        if(total < 0 || !objects){
            return false;
        }
        for(let i = 0; i < cache.length; i ++){
            if(cache[i].total === total && cache[i].index === index){
                return cache[i].result;
            }
        }
        // 判断当前背包还能否装下第一个物品
        // 如果不行，装入后续物品
        // 如果可以，考虑是否要装该物品，最终将背包中价值高的返回
        const obj = objects[index];
        let result;
        if(total < obj.weight){
            result = _package(total, index + 1);
        }else{
            // 装入背包
            let result1 = _package(total - obj.weight, index + 1);
            // 不装
            const result2 = _package(total, index + 1);
            if(result1 === false && result2 === false){
                //无解
                result = false;
            }else if(result1 === false && result2 !== false){
                result = result2;
            }else if(result1 !== false && result2 === false){
                result = [obj].concat(result1);
            }else{
                result1 = [obj].concat(result1);
                const total1 = result1.reduce((prev, next) => prev += next.price, 0);
                const total2 = result2.reduce((prev, next) => prev += next.price, 0);
                result = total1 > total2 ? result1 : result2;
            }
        }
        cache.push({
            total,
            index,
            result
        })
        return result;
    }
    const result = _package(total, 0);
    console.log(cache);
    return result;
}

// console.log(change(46, [25, 10, 5, 1]));
// console.log(change(51, [30, 25, 10, 1])); // [ 30, 10, 10, 1 ]，但最优解其实是[25,25,1]

console.log(package(150, [
    {
        weight: 10,
        price: 100
    },
    {
        weight: 50,
        price: 150
    },
    {
        weight: 20,
        price: 50
    },
    {
        weight: 40,
        price: 40
    },
    {
        weight: 30,
        price: 50
    }
]));
console.log(num);
