function printLines(arr) {
    for(let i=0;i<=arr.length;i++) {
        if (arr[i] == "Stop")
            break;

        let str = arr[i].toString()
        console.log(str);


    }
}
printLines(['line1','line2', 'line3','Stop', 'line4'])