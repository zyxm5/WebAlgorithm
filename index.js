// 0, 1, 1, 2, 3, 5, 8, 13, 21 ...
// 返回第n位的值

/**
 * 常规
 * @param {*} n 
 */
function fibo(n){
    // 严谨性判断
    if(n <= 0){
        return -1;
    }
    if(n === 1){
        return 0;
    }
    if(n === 2){
        return 1;
    }
    let a = 0;
    let b = 1;
    let c;
    for(let i = 3; i <= n; i++){
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}

// 通式 f(n) = f(n - 1) + f(n - 2)
/**
 * 动态规划
 * @param {*} n 
 */
function fibo2(n){
    // 严谨性判断
    if(n <= 0){
        return -1;
    }
    if(n === 1){
        return 0;
    }
    if(n === 2){
        return 1;
    }
    return fibo2(n - 1) + fibo2(n - 2);
}
console.log(fibo(6));
console.log(fibo2(6));