function solve(n) {
    function printStars(count) {
        console.log("*".repeat(count));
    }

    for (var i = 1; i <= n; i++) {
        printStars(i)
    }
    for (var i = n-1; i > 0; i--) {
        printStars(i)
    }
}
solve(5);