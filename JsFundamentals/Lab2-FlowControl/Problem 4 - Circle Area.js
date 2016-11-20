function circleArea(r) {
    let area = r*r*Math.PI;
    console.log(area);
    let areaRounded = Math.round(area*100)/100;
    console.log(areaRounded);
}
circleArea(['5']);