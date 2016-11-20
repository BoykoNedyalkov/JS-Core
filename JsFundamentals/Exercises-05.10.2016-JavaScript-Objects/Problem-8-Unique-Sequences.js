function main(arr) {
    let result = [];
    result2 = []
    let push = true
    let array1 = [];
    for(let line of arr){
        let stringArray = Array.from(line.match(/-?[0-9]\d*(\.\d+)?/g)).sort(function (a,b) {
            return b - a;
        });
        let array = [];
        for(let item of stringArray){
            item = Number(item)
            array.push(item)
        }

        let string = array.toString();
        let index = result.indexOf(string);
        if(index< 0){
            result.push(string);
        }
    }
    result.sort(function (first,second) {
        let a = Array.from(first.match(/-?[0-9]\d*(\.\d+)?/g))
        let b = Array.from(second.match(/-?[0-9]\d*(\.\d+)?/g))
        return a.length - b.length;
    });
    //console.log(result)
    for(let a of result){
        let arr = Array.from(a.match(/-?[0-9]\d*(\.\d+)?/g))
        let line = '['

            line += arr.join(', ');

        line +=']'
        console.log(line)
    }

}
/*main(['[1, 1, 1, 1, 1, 1, 1, 1]',
    '[4, -3, 3, -2, 2, 55, 44, 2]',
    '[10, 1, -17, 0, 2, 13]',
    '[4, -3, 3, -2, 2, -1, 1, 0]',
    '[4, -3, 3, -2, 2, 55, 44, 2]',

    ]);*/

main(['[7.14, 7.180, 7.339, 80.099]',
    '[7, 7.180, 7.339, 80.099]',
    '[7.14, 7.180, 7.339, 80.099]',
    '[7.339, 80.0990, 7.140000, 7.18]',
    '[7.339, 7.180, 7.14, 80.099]']);