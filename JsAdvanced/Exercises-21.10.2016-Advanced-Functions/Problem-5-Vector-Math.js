(() => {
    let solution = {
        add: function(a,b) {
            return[(a[0]+b[0]),(a[1] + b[1])]
        },
        multiply: function (a, num) {
            return[a[0]*num,a[1]*num]
        },
        length: function (a) {
            return Math.sqrt(a[0]*a[0] + a[1]*a[1])
        },
        dot: function (a, b) {
            return a[0]*b[0] + a[1]*b[1]
        },
        cross: function (a,b) {
            return a[0] * b[1] - b[0]* a[1]
        }

    };
    return solution;
})();
(function() {
    let solution = {
        add: function(a,b) {
            return[(a[0]+b[0]),(a[1] + b[1])]
        },
        multiply: function (a, num) {
            return[a[0]*num,a[1]*num]
        },
        length: function (a) {
            return Math.sqrt(a[0]*a[0] + a[1]*a[1])
        },
        dot: function (a, b) {
            return a[0]*b[0] + a[1]*b[1]
        },
        cross: function (a,b) {
            return a[0] * b[1] - b[0]* a[1]
        }

    };
    return solution;
})();


/*solution.add([1, 1], [1, 0]);
solution.multiply([3.5, -2], 2);
solution.length([3, -4]);
solution.dot([1, 0], [0, -1]);
solution.cross([3, 7], [1, 0]);*/
/*(() =>{
 let solution = {
 add: (x, y) => {return [x[0]+x[1], y[0]+y[1]]},
 multiply: (vect, s) => {return [vect[0]*s, vect[1]*s]},
 length: (vect) => {return Math.sqrt(vect[0]*vect[0] + vect[1]*vect[1])},
 dot: (x,y) => {return x[0]*y[0] + x[1]*-y[1]},
 cross: (x, y) => {return x[0]*y[1] - x[1]*y[0]}
 };
 return solution;
 // console.log(solution.add([1, 1], [1, 0]))
 // console.log(solution.cross([3, 7], [1, 0]))
 // console.log(solution.multiply([3.5, -2], 2))
 // console.log(solution.length([3, -4]))
 // console.log(solution.dot([1, 0], [0, -1]))
 })();*/