function largestThreeNumbers(arr) {
    let nums= arr.map(Number);
    let numsSorted = nums.sort((a,b)=>b-a);
    let count = Math.min(3, arr.length);
    for(let i=0; i < count ; i++)
        console.log(numsSorted[i]);
}
largestThreeNumbers(['1', '2', '500', '9', '-4'])
