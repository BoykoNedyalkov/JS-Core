function solve(arr) {
    let evenArr = [];
    for(let i in arr){
        if(i%2 == 0)
            evenArr.push(arr[i]);
    }
    console.log(evenArr.join(' '))
}
solve(['20','30','40']);