function solve(input) {
    let text = input[0];
    let words = input.slice(1);
    for(let current of words){
        let replaced = '-'.repeat(current.length);
        while (text.indexOf(current)> -1){
            text = text.replace(current,replaced);
        }
    }
    console.log(text)
}
solve(['roses are red, violets are blue','violets are','red']);
