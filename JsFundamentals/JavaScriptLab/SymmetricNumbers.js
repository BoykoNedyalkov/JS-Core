'use strict';
function symmetricNumbers(arr) {
    let n = Number(arr[0]), result = ''
    for(let i = 1; i <= n ; i++)
        if(isSymmetric("" + i))
            result += i + " "
    console.log(result);
    function isSymmetric(str) {
        for( let i = 0 ; i<str.length;i++)
            if (str[i] != str[str.length - i - 1])
                return false
        return true
    }
}
symmetricNumbers(['1000'])

