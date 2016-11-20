function distaceOverTime(arr) {
    let [v1,v2,t] = [arr[0],arr[1],arr[2]].map(Number);
    let speed =1000/3600;
    v1 = v1*speed;
    v2 = v2*speed;
    let s1 = v1*t;
    let s2 = v2*t;
    let total = Math.abs(s1-s2);
    console.log(total);
}
distaceOverTime([0, 60, 3600]);