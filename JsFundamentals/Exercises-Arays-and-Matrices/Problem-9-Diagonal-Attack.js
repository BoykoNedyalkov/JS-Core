function solve(inputMatrix) {
    let matrix = inputMatrix.map(
        row => row.split(' ').map(Number));
    let mainSum = 0, secondarySum = 0;
    for (let row = 0; row < matrix.length; row++) {
        mainSum += matrix[row][row];
        secondarySum += matrix[row][matrix.length-row-1];
    }
    if(secondarySum == mainSum){
        for (var row = 0; row < matrix.length; row++) {
            for (var col = 0; col < matrix[row].length; col++) {
                if(col == row || col == matrix.length-1-row){

                }
                else {
                    matrix[row][col] = mainSum;
                }

            }

        }
    }
    else{
    }
    console.log(matrix.map(row => row.join(' ')).join('\n'))
}
solve(['1 1 1',
    '1 1 1',
    '1 1 0']

)
