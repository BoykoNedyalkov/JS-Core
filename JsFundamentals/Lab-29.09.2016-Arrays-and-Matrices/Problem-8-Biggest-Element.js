function solve(arr) {
    let matrix = arr.map(row => row.split(' ').map(Number));
    let biggestNumber = Number.NEGATIVE_INFINITY;
    matrix.forEach(
        r => r.forEach(
            c=> biggestNumber = Math.max(biggestNumber,c)
        )
    )
    console.log(biggestNumber);
}