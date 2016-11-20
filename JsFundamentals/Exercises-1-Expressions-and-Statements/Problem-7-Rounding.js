function round([num,n]) {
 [num , n] = [num , n].map(Number);

    let denom = Math.pow(10,n);
    let  second = Math.round(num*denom)/denom;

    console.log(second);
}
round([3.1415926535, 2])