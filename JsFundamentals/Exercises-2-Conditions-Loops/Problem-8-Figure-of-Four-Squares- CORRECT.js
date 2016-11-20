function solve([n]) {

    let m = n;
    if(n%2 == 0){
        m = n-1;
    }
    if(n == 2)
        m=3 ;
    let line = '';
    for (var i = 1; i <= m; i++) {
        if(i == 1 || i == m || i== Math.round(m/2)){
            line = '+';
            for (var j = 1; j <= n-2; j++) {
            line += '-';
            }
            line += '+';
            for (var j = 1; j <= n-2; j++) {
                line += '-';
            }
            line+='+';

        }
        else {
            line ='|';
            for (var j = 1; j <= n-2; j++) {
                line += ' ';
            }
            line+='|';
            for (var j = 1; j <= n-2; j++) {
                line += ' ';
            }
            line+='|';
        }
        console.log(line)
    }
}
solve([3])