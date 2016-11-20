function mapSort(map, func) {
    let arr =  [...map].sort(func);
    let result = new Map();
    for(let [key,value] of arr){
        result.set(key,value)
    }
    return result;
}
module.exports = mapSort;

