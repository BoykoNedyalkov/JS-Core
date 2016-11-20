function add(number) {
    let f = x => add(number + x);
    f.valueOf = () => number;
    return f;
}
/*function sum (n) {
    var v = function (x) {
        return sum (n + x);
    };

    v.valueOf = v.toString = function () {
        return n;
    };

    return v;
}
*/

console.log(+add(1)(6)(-3));


