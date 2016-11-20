function main(text) {
    let namePattern = /(\*[A-Z][a-zA-Z]+)(?=\s|$)/g;
    let phonePattern = /(\+[0-9-]{10})(?=\s|$)/g;
    let idPattern = /!([0-9A-Za-z]+)(?=\s|$)/g;
    let basePattern = /(_[A-Za-z0-9]+)(?=\s|$)/g;
   let pattern = /(\*[A-Z][a-zA-Z]*)(?=\s|$)|(\+[0-9-]{10})(?=\s|$)|(![0-9A-Za-z]+)(?=\s|$)|(_[A-Za-z0-9]+)(?=\s|$)/g
    text.forEach(row => console.log(row.replace(pattern, x => '|'.repeat(x.length))));
   /* for (let sentence of text) {
        let matchName = namePattern.exec(sentence);
        let matchPhone = phonePattern.exec(sentence);
        let matchId = idPattern.exec(sentence);
        let matchBase = basePattern.exec(sentence);
        while (matchName) {
            let final = matchName[0];
            let replaced = '|'.repeat(final.length);
            matchName = namePattern.exec(sentence);
            sentence = sentence.replace(final, replaced)
        }
        while (matchPhone) {
            let final = matchPhone[0];
            let replaced = '|'.repeat(final.length);
            matchPhone = phonePattern.exec(sentence);
            sentence = sentence.replace(final, replaced)
        }
        while (matchId) {
            let final = matchId[0];
            let replaced = '|'.repeat(final.length);
            matchId = idPattern.exec(sentence);
            sentence = sentence.replace(final, replaced)
        }
        while (matchBase) {
            let final = matchBase[0];
            let replaced = '|'.repeat(final.length);
            matchBase = namePattern.exec(sentence);
            sentence = sentence.replace(final, replaced)

        }
        console.log(sentence);
    }
    */

}
