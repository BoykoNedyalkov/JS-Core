function solve(arr) {
    let matrix = arr.map(row => row.split(' ').map(Number));
    let mainSum = 0;
    let secondarySum = 0;
    for (var row = 0; row < matrix.length; row++) {
        mainSum += matrix[row][row];
        secondarySum += matrix[row][matrix.length-1-row];
        
    }
    console.log(mainSum+ ' ' + secondarySum );
}
solve(['20 40', '10 60']); 