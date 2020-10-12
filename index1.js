function Node(value) {
    this.value = value;
    this.neighbors = [];
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');

// 需要连接的节点
const pointSet = [a, b, c, d, e];
// 最大代价
const max = 100000;
// 各个节点连接的代价
const distance = [
    [0, 4, 7, max, max],
    [4, 0, 8, 6, max],
    [7, 8, 0, 5, max],
    [max, 6, 5, 0, 7],
    [max, max, max, 7, 0]
]

/**
 * 判断两个节点是否可以连接
 * @param {*} resultList 
 * @param {*} begin 
 * @param {*} end 
 */
function canLink(resultList, begin, end){
    // 先找出两个节点的所属部落
    let beginIn = null;
    let endIn = null;
    for(let i = 0 ; i < resultList.length ; i++){
        if(resultList[i].indexOf(begin) > -1){
            beginIn = resultList[i];
        }
        if(resultList[i].indexOf(end) > -1){
            endIn = resultList[i];
        }
    }
    // 两个节点可能的情况
    // 1.两个节点都是新的节点,不属于任何一个部落 - 可以连接,产生一个新的部落
    // 2.一个节点属于一个部落,另一个节点是新的节点 - 可以连接,扩展该节点的部落
    // 3.两个节点属于同一个部落 - 不可以连接
    // 4.两个节点分别属于不同的部落 - 可以连接,连接两个部落
    if(beginIn != null && endIn != null && beginIn == endIn){
        return false;
    }
    return true;
}

/**
 * 连接两个节点
 * @param {*} resultList 
 * @param {*} begin 
 * @param {*} end 
 */
function link(resultList, begin, end){
    const list = [];
    // 先找出两个节点的所属部落
    let beginIn = null;
    let endIn = null;
    for(let i = 0 ; i < resultList.length ; i++){
        if(resultList[i].indexOf(begin) > -1){
            beginIn = resultList[i];
        }
        if(resultList[i].indexOf(end) > -1){
            endIn = resultList[i];
        }
    }
    // 两个节点可能的情况
    // 1.两个节点都是新的节点,不属于任何一个部落 - 可以连接,产生一个新的部落
    // 2.一个节点属于一个部落,另一个节点是新的节点 - 可以连接,扩展该节点的部落
    // 3.两个节点属于同一个部落 - 不可以连接
    // 4.两个节点分别属于不同的部落 - 可以连接,连接两个部落
    if(beginIn == null && endIn == null){
        begin.neighbors.push(end);
        end.neighbors.push(begin);
        list.push(begin);
        list.push(end);
        resultList.push(list);
    }else if(beginIn != null && endIn == null){
        beginIn[beginIn.length - 1].neighbors.push(end);
        end.neighbors.push(beginIn[beginIn.length - 1]);
        beginIn.push(end);
    }else if(beginIn == null && endIn != null){
        endIn[endIn.length - 1].neighbors.push(begin);
        begin.neighbors.push(endIn[endIn.length - 1]);
        endIn.push(begin);
    }else if(beginIn != null && endIn != null && beginIn != endIn){
        beginIn[beginIn.length - 1].neighbors.push(endIn[0]);
        endIn[0].neighbors.push(beginIn[beginIn.length - 1]);
        beginIn.push(...endIn);
        resultList.splice(resultList.indexOf(endIn), 1);
    }
}

/**
 * 返回代价最少的节点连接-克鲁斯卡尔算法(加法边)
 * @param {*} pointSet 
 * @param {*} distance 
 */
function kruskal(pointSet, distance){
    // 已连接的节点组成的部落
    const resultList = [];
    // 当前起点
    let begin = null;
    // 最小代价终点
    let end = null;
    // 总代价
    let total = 0;
    // 当前需要花费的最小代价
    while(true){
        let minDis = max;
        // 遍历distance,找到最小代价的两个节点
        for(let i = 0;i < distance.length; i++){
            // 遍历代价，找到最小代价
            for(let j = 0; j < distance[i].length; j ++){
                // i = j 表示节点本身 不考虑
                let tempBegin = pointSet[i];
                let tempEnd = pointSet[j];
                if(i !== j && distance[i][j] < minDis && canLink(resultList, tempBegin, tempEnd)){
                    begin = tempBegin;
                    end = tempEnd;
                    minDis = distance[i][j];
                }
            }
        }
        total += minDis;
        console.log(minDis);
        // 连接两个节点
        link(resultList, begin, end);
        if(resultList.length === 1 && resultList[0].length === pointSet.length){
            break;
        }
    }
    return resultList;
}

console.dir(kruskal(pointSet, distance));

