function solve(arr) {
    let input = arr.map(
        row => row.split(' ').map(Number));

    let rowsCount = Number(input[0][0]);
    let colsCount = Number(input[0][1]);
    let count =1;
    let steps = rowsCount;
    let matrix =[];
    for (var row = 0; row < rowsCount; row++) {
        let currentRow = [];
        for (var col = 0; col < colsCount; col++) {
            currentRow[col] = 0;

        }
        matrix.push(currentRow)

    }
    let x = 0;
    let y = -1;
    while(count <= rowsCount*colsCount){
        for (var i = 0; i < steps; i++) {
            y++;
            matrix[x][y] = count;
            count++;
        }
        steps--;
        for (var i = 0; i < steps; i++) {
            x++;
            matrix [x][y] = count;
            count++;
        }

        for (var i = 0; i < steps; i++) {
            y--;
            matrix[x][y] = count;
            count++;
        }
        steps--;
        for (var i = 0; i < steps; i++) {
            x--;
            matrix[x][y] = count;
            count++;
        }
    }
    console.log(matrix.map(row => row.join(' ')).join('\n'))
}
solve(['3 3']);