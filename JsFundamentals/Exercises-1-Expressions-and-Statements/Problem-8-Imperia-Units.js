function convert([inches]) {
    inches = Number(inches);
    let feet = Math.floor(inches/12);
    let finalInches = inches%12;
    console.log(feet+"'-"+finalInches + '"');
}
convert([11]);