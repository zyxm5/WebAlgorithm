// 记录函数的执行次数
let num = 0;
function LCS(str1, str2){
    // 如果字符串的第一个元素相同，那么这个元素必会进入最终的子序列中
    // 如果不同
    // 比较去掉第一个元素的str1和str2的LCS的结果和str1和去掉第一个元素的str2的LSC的结果
    // 取更长的一个
    const cache = [];
    function _LCS(str1, str2){
        if(str1 === '' || str2 === ''){
            return '';
        }
        num++;
        // foreach能结束函数
        // cache.forEach(e => {
        //     if(e.str1 === str1 && e.str2 === str2){
        //         return e.result;
        //     }
        // })
        for(let i = 0; i < cache.length; i++){
            if(cache[i].str1 === str1 && cache[i].str2 === str2){
                return cache[i].result;
            }
        }
        let result;
        if(str1[0] === str2[0]){
            result = str1[0] + _LCS(str1.slice(1), str2.slice(1));
        }else{
            const lcs1 = _LCS(str1.slice(1), str2);
            const lcs2 = _LCS(str1, str2.slice(1));
            result = lcs1.length > lcs2.length ? lcs1 : lcs2;
        }
        cache.push({
            str1,
            str2,
            result
        })
        return result;
    }
    const result = _LCS(str1, str2);
    console.log(cache);
    return result;
}

console.log(LCS('邓哥特有的贵族气质吸引了很多女孩', '邓哥喜欢吃秋葵和香菜，但是他的女朋友们不喜欢'));
console.log(num);
