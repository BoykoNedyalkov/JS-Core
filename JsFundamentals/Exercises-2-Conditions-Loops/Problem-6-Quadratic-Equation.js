function solve([a,b,c]) {
    [a,b,c] = [a,b,c].map(Number);
    let d = (b*b)- (4*a*c);
    let x1 = ((-b + Math.sqrt(d))/(2*a));
    let x2 = ((-b - Math.sqrt(d))/(2*a));
    if(d > 0){
    console.log(Math.min(x1,x2));
    console.log(Math.max(x1,x2));
    }
    else  if (d<0){
        console.log('No');
    }
    else {
        console.log(x1);
    }
}
solve([6,11,-35]);