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

function findIndex(pointSet, nowPoint){
    for(let i = 0; i < pointSet.length; i ++){
        if(pointSet[i].value === nowPoint.value){
            return i;
        }
    }
}

/**
 * 返回以当前节点集合为起点的最小代价的终点
 * @param {*} pointSet 
 * @param {*} distance 
 * @param {*} nowPointSet 
 */
function getMinDisPoint(pointSet, distance, nowPointSet){
    // 当前起点
    let fromPoint = null;
    // 最小代价终点
    let minDisPoint = null;
    // 当前需要花费的最小代价
    let minDis = max;
    // 遍历当前节点集合
    for(let i = 0;i < nowPointSet.length; i++){
        fromPoint = nowPointSet[i];
        // 找到以当前节点为起点的所有终点所需的代价
        const index = findIndex(pointSet, nowPointSet[i]);
        // 遍历代价，找到最小代价
        for(let j = 0; j < distance[index].length; j ++){
            // 该节点不在当前节点中且代价最小
            if(nowPointSet.indexOf(pointSet[j]) < 0 && distance[index][j] < minDis){
                minDis = distance[index][j];
                minDisPoint = pointSet[j];
            }
        }
    }
    fromPoint.neighbors.push(minDisPoint);
    minDisPoint.neighbors.push(fromPoint);
    return minDisPoint;
}

/**
 * 返回代价最少的节点连接-普利姆算法(加点法)
 * @param {*} pointSet 
 * @param {*} distance 
 * @param {*} start 
 */
function prim(pointSet, distance, start){
    const nowPointSet = [];
    nowPointSet.push(start);
    while(true){
        const minDisPoint = getMinDisPoint(pointSet, distance, nowPointSet);
        nowPointSet.push(minDisPoint);
        if(nowPointSet.length === pointSet.length){
            break;
        }
    }
    return nowPointSet;
}

console.log(prim(pointSet, distance, pointSet[0]));

