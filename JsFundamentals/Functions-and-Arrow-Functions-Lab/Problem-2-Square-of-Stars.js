function solve(n) {
    function printStars(count) {
        console.log("* ".repeat(count));
    }

    for (var i = 1; i <= n; i++) {
        printStars(n)
    }
}
solve(5);