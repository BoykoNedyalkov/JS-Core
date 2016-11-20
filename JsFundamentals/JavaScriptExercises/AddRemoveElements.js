function AddRemoveElemnts(arr) {
    let obj = {};
    let n = arr.length;
    let string = "";
    let result = [];
    for ( i = 0 ; i< (n) ; i++) {
        string = arr[i].split(' ');
        if (string[0] == "add") {
            result.push(string[1]);
        }
        else if (string[0] == "remove")
        {
            let index = string[1]
            result.splice(index,1)
        }
    }
    for(let i = 0 ; i<result.length ; i++){
        console.log(result[i]);
    }
}
AddRemoveElemnts(['add 3', 'add 5', 'remove 2', 'remove 0', 'add 7'])