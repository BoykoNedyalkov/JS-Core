function solve([n]) {
    [n] = [n].map(Number);
    let m = n;
    if(n%2 == 0)
        m = n-1;
    for (var rows = 1; rows <= m; rows++) {
        let line = '';
        if (rows == 1 || rows == (m+1)/2 || rows == m)
            line += '+';
        else
            line += '|';
        for (var cols = 1; cols < (n*2)-1; cols++) {
            if (rows == 1 || rows == (m+1)/2 || rows == m)
                if (n%2 != 0) {
                    if ((cols == m - 1 || cols == (n * 2) - 2)) {
                        line += '+';
                    }
                    else {
                        line += '-';
                    }
                }
                else {
                    if ((cols == m || cols == (n * 2) - 2)) {
                        line += '+';
                    }
                    else {
                        line += '-';
                    }
                }
            else if(cols == n-1 || cols == (n*2)-2)
                line +='|';
            else{
                line +=' ';
            }
        }
        console.log(line);
    }
}
solve([10]);