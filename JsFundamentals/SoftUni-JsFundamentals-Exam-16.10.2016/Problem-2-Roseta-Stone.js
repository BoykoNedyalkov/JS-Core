function main(arr) {
    let n = Number(arr[0]);
    let templeMatrix = []
    let result = [];
    arr.shift()
    templeMatrix = arr.map(row => row.split(' ').map(Number));
   // templeMatrix = input[i].split(' ').map(x => Number(x.trim()));
    for (var i = 0; i < arr.length-n; i++) {
        templeMatrix.pop()
    }

    for (var i = 0; i < n; i++) {
        arr.shift()
    }
    let matrix = arr.map(row => row.split(' ').map(Number));
    //console.log(matrix)
    for (var row = 0; row < matrix.length; row++) {
        for (var col = 0; col <matrix[row].length; col++) {
            let number = templeMatrix[row%templeMatrix.length][col%templeMatrix[0].length];
            matrix[row][col] = (matrix[row][col] + number)%27;
            if(matrix[row][col]== 0){
                matrix[row][col] = ' ';
            }
            else {
                matrix[row][col] = String.fromCharCode(matrix[row][col]+64)
            }
        }
    }
let line = ''
    for (var row = 0; row < matrix.length; row++) {
        for (var col = 0; col <matrix[row].length; col++) {
            line += matrix[row][col]
        }
    }
    console.log(line)

   // console.log(arr)
   // console.log(matrix)
   // console.log(templeMatrix)


}
main(["1",
    "1 3 13",
    "12 22 14 13 25 0 4 24 23",
    "18 24 2 25 22 0 0 11 18",
    "8 25 6 26 8 23 13 4 14",
    "14 3 14 10 6 1 6 16 14",
    "11 12 2 10 24 2 13 24 0",
    "24 24 10 14 15 25 18 24 12",
    "4 24 0 8 4 22 19 22 14",
    "0 11 18 26 1 19 18 13 15",
    "8 15 14 26 24 14 26 24 14"]
)