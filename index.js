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
function change(total, denos) {
    if (total <= 0) {
        return [];
    }
    let best = 0;
    for (let i = 0; i < denos.length; i++) {
        if (denos[i] > best && denos[i] <= total) {
            best = denos[i];
        }
    }
    let result = [best];
    total -= best;
    return result.concat(change(total, denos));
}

console.log(change(46, [25, 10, 5, 1]));
console.log(change(51, [30, 25, 10, 1])); // [ 30, 10, 10, 1 ]，但最优解其实是[25,25,1]