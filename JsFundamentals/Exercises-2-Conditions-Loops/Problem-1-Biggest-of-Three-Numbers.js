function solve([a,b,c]) {
    [a,b,c] = [a,b,c].map(Number);
    console.log(Math.max(a,b,c));
}
solve(['000001','231231','100']);