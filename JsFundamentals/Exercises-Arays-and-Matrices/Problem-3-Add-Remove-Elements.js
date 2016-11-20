function solve(input) {
    let number = 1;
    let result = [];
    let iterations = input.length;
    for (var i = 0; i < input.length-1; i++) {
        if(input[i] == 'add'){
            result.push(number);
        }
        else{
            result.pop()
        }
        number++;
    }
    if(result.length == 0){
        console.log("Empty")
    }
    else{
        console.log(result.join('\n'));
    }
}
solve(['add','add','add','add'])