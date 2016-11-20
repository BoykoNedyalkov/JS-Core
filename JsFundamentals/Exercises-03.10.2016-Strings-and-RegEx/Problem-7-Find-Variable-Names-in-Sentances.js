function main(strings) {
    let pattern = /\b_([a-zA-Z0-9]+)\b/g;
    let result = [], match;
    for (let string of strings) {
        while (match = pattern.exec(string)){
            let final = match[1];
            result.push(final);
        }
    }
    console.log(result.join(','));
    
}
main(['The _id and _age variables are both integers.']);