function solve(arr) {
    let resultArr = arr
        .filter((num,i)=>i%2 ==1)
        .map(x => x*2)
        .reverse();
    console.log(resultArr.join(' '));
}
solve(['10','15','20','25']);
