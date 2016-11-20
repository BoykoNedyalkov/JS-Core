function dist(arr) {
    let [x1,y1,z1,x2,y2,z2]=[arr[0],arr[1],arr[2],arr[3],arr[4],arr[5],].map(Number);
    //let distance = Math.sqrt(Math.pow(2,Math.abs(x1-x2)) +Math.pow(2,Math.abs(y1-y2)) + Math.pow(2,Math.abs(z1-z2)));
    let dx = Math.abs(x1-x2);
    let dy = Math.abs(y1-y2);
    let dz = Math.abs(z1-z2);
    let distance = Math.sqrt(dx*dx + dy*dy + dz*dz);
    console.log(distance);

}
dist([3.5, 0, 1, 0, 2, -1])