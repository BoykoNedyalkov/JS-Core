function solve(arr) {
    let input = arr.map(
        row => row.split(' ').map(Number));
    let matrix = [];
    let rowsCount = Number(input[0][0]);
    let colsCount = Number(input[0][1]);
    let centerRow = Number(input[1][0]);
    let centerCol = Number(input[1][1]);
    for (var row = 0; row < rowsCount; row++) {
        let currentRow = [];
        for (var col = 0; col < colsCount; col++) {
            currentRow[col] = 0;
        }
        matrix.push(currentRow)
    }
    for (let row = 0; row < rowsCount; row++) {

        for (let col = 0; col < colsCount; col++) {
            matrix [row][col] = Math.max(Math.abs(centerRow - row) , Math.abs(centerCol - col)) +1;
        }

    }
    console.log(matrix.map(row => row.join(' ')).join('\n'))

}
solve(['4 4',
       '0 0'])