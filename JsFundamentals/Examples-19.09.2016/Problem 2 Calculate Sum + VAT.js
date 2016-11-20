function sumVAT(arr) {
    let sum = 0;
    for(let num of arr){
        sum += Number(num);

    }
    console.log("sum = "+ sum);
    console.log("VAT = "+(sum*0.2));
    console.log("total = "+ sum*1.2);
}
sumVAT(['99.9999','99.9999','99.9999','99.9999','99.9999','99.9999','99.9999','99.9999',]);