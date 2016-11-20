function solve([string]) {
    var isPalindrome = true;
    for (var i = 0; i < (string.length)/2; i++) {
        if(string[i] != string[string.length-1-i]){
            isPalindrome = false;
        }

    }
    if(isPalindrome == true)
        console.log('true')
    else
        console.log('false')
}

solve(['abba'])