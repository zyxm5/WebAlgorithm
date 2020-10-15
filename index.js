// 青蛙一次只能跳一个台阶或者两个台阶
// 问:青蛙跳上n级台阶有多少种办法?

// 青蛙跳上n级台阶前,可能跳了一个台阶或者两个台阶
// 所以该问题可以分解为
// 青蛙跳上n-1级台阶和n-2级台阶有多少种办法

// n-1再次分解 = (n-2) + (n-3);

// 通式:f(n) = f(n-1) + f(n-2); 与斐波那契数列一致

/**
 * 普通青蛙跳
 * @param {*} n 
 */
function jump(n){
    // 严谨性判断
    if(n <= 0){
        return -1;
    }
    if(n == 1){
        return 1;
    }
    if(n == 2){
        // 跳两次一个台阶或者一次两个台阶
        return 2;
    }
    return jump(n - 1) + jump(n - 2);
}

// 变态青蛙跳台阶问题
// 青蛙一次只能跳一个台阶或者两个台阶或者n个台阶
// 问:青蛙跳上n级台阶有多少种办法?

// 同上,推理得通式:f(n) = f(n - 1) + f(n - 2) + ... + f(2) + f(1) + 1;
// 最后的1代表一次跳上n级台阶

function jump2(n){
    // 严谨性判断
    if(n <= 0){
        return -1;
    }
    if(n == 1){
        return 1;
    }
    if(n == 2){
        // 跳两次一个台阶或者一次两个台阶
        return 2;
    }
    let sum = 1;// 代表一次性跳上去
    for(let i = 1; i < n; i ++){
        sum += jump2(i);
    }
    return sum;
}

console.log(jump2(4));
