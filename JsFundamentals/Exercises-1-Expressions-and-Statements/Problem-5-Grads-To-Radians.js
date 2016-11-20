function gradsToRadians([num]) {
    let input = Number(num);

    let out = (input*0.9)%360;
    if(input < 0) {
        out = out + 360
    };
    console.log(out);
}
gradsToRadians([-50]);