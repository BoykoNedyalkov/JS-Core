function JSONstringify(arr) {
    let obj = {}
    let string = ""
    for (let i = 0 ; i < arr.length ; i++) {
        str = arr[i].split(' ');
        obj[str[0]] = str[2];
        if(str[0] == "grade"){
            obj[str[0]] = Math.round(parseInt(str[2]));
        }
        if(str[0] == "age"){
            obj[str[0]] = Math.round(parseInt(str[2]));
        }
    }
    console.log(JSON.stringify(obj))
}
JSONstringify(['name -> Angel', 'surname -> Georgiev', 'age -> 20', 'grade -> 6.00', 'date -> 23/05/1995','town -> Sofia']);
