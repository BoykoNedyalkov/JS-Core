function main(input) {
    let words = input.join('\n').toLowerCase().split(/[^A-Za-z0-9_]/).filter(x => x != '');
    let wordsCount = new Map();
    for(let w of words){
        wordsCount.has(w)?wordsCount.set(w,wordsCount.get(w)+1) : wordsCount.set(w,1);
    }
    let allWords = Array.from(wordsCount.keys()).sort();
    allWords.forEach(w => console.log(`'${w}' -> ${wordsCount.get(w)} times`))
}
main(['JS and Node.js', 'JS again and again', 'Oh, JS?']);