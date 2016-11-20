function solve(arr) {
    let expression = arr[0];
    let elements = expression.split(/[\s.();,]+/);

    console.log(elements.join("\n"));
}
solve(['let sum = 4 * 4,b = "wow";'])
