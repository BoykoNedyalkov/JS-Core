function areaAndParam(arr) {
    let [a,b] = [arr[0],arr[1]].map(Number);
    let area = a * b;
    let perimeter = (a+b)*2;
    console.log(area);
    console.log(perimeter);
}
areaAndParam(['2','2']);