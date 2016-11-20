function solve(arr) {
    let input = arr.map(Number);
    let current = input[0]-1;
    let result = [];
    for (var i = 0; i <= input.length-1; i++) {
        if(input[i]>=current){
            result.push(input[i]);
            current = input[i];
        }
        
    }
    console.log(result.join('\n'));
}
solve(['1','3','8','4','10','12','3','2','24']);