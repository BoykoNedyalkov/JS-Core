function solve(input) {
    let n = Number(input[input.length-1]);
    input.pop();
    for (var i = 0; i < input.length;) {
        console.log(input[i]);
        i = i+n;
    }
}
solve([5,20,31,4,20,2]);