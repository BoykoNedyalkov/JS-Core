/*function solve(arr,order) {
    function sortArr(a,b) {
        if(order == 'asc')
            return a-b;
        else
            return b-a;
    }
    for(let item of arr){
        arr.sort(sortArr)
    }


    return arr;
}
solve([14, 7, 17, 6, 8], 'desc');*/
function sortArray(inputArray,sortMethod) {
    let ascendingComparator = function (a,b) {
        return a-b;
    };
    let descendingComparator = function (a,b) {
        return b-a ;
    };
    let sortingStrategies = {
        'asc': ascendingComparator,
        'desc': descendingComparator
    };
    console.log( inputArray.sort(sortingStrategies[sortMethod]));
}
sortArray([14, 7, 17, 6, 8], 'asc');