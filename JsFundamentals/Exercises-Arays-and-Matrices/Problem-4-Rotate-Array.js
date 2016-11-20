function solve(input) {
    let a = input;
    let rotations1 = input[input.length-1];
    input.pop();
    let rotations = rotations1%input.length;

    for (var i = 0; i < rotations; i++) {
        let var1 = input[input.length-1];
        input.pop();
        input.unshift(var1);
    }


        console.log(input.join(' '));


}
solve(['Banana','Orange','Coconut',',Apple', 15]);