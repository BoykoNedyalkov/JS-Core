function solve(input) {
    let matrix = input.map(row => row.split(' ').map(Number));
    let sum = 0;

    let print = true;
    for (var a = 0; a < matrix[0].length; a++) {
        sum += matrix[0][a];
    }

    for (let i = 0; i < matrix.length; i++) {
        let kopele = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            kopele += matrix[i][j];
        }
        if(sum != kopele){
            print = false;
            break;
        }


    }

    for (let col = 0; col < matrix[0].length; col++) {
        let kopele = 0;
        for (let row = 0; row < matrix.length; row++){
            kopele += matrix[row][col];
        }
        if(sum != kopele){
            print = false;
            break;
        }
    }
    console.log(print)
}
solve(['4 5 6','6 5 4','1 1 13']);

