function interest([principal , interest , period , time]) {
    [principal , interest , period , time] = [principal , interest , period , time].map(Number);
    interest = interest/100;
    let frequency = 12/period;
    let total = principal * Math.pow(1+interest/frequency,frequency*time);
    console.log(total.toFixed(2));

}

interest([1500, 4.3, 3, 6])