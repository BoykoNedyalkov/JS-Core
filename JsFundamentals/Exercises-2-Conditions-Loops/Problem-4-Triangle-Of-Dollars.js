function solve([n]) {
    let line = "";
    for (let rows = 1; rows <= n; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            line += '$';

        }
        console.log(line);
        line = '';
    }
}
solve([5])