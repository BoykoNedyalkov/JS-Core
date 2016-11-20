function KeyVal(arr) {
    let obj = {};
    let n = arr.length;
    let string = "";
    let result = [];
    for ( i = 0 ; i< (n-1) ; i++) {
        string = arr[i].split(' ');
        if (string[0] == arr[arr.length - 1]) {
            result.push(string[1]);
        }

    }
    if(result != "")
    {
        for (let j = 0 ; j<result.length ; j++)
        {
            console.log(result[j])
        }
    }
    else
    {
        console.log("None")
    }
}
KeyVal(['3 test', '3 test1', '4 test2','4 test3', '4 test5', '4'])
