function main(arr) {
    let stringArr = arr.map(str => str.split(' '));
    let result = '';
    for(let string of stringArr[0]){
        let chars = Array.from(string);
        let endString = ''
        for (var i = 0; i < chars.length; i++) {
            let endChar = '';
            if(i == 0){
                endChar = chars[i].toUpperCase()
            }
            else{
               endChar = chars[i].toLowerCase();
            }
            endString += endChar;
        }
        result += endString + ' '
    }
    console.log(result);
}
main(['Was that Easy? tRY thIs onE for SiZe!']);