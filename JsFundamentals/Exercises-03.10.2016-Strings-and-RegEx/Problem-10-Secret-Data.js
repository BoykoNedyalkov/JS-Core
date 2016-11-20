function main(text) {
    let namePattern = /(\*[A-Z][a-zA-Z]+)(?=\s|$)/g;
    let phonePattern = /\+([0-9]+)\-([0-9]+)\-([0-9]+)(?=\s|$)/g;
    let idPattern = /!([a-zA-Z0-9])(?=\s|$)/g
    let basePattern = /_([A-Z][a-z0-9]+)(?=\s|$)/g;

    for (let sentence of text) {
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


}
main([`Agent *Ivankov was in the room when it all happened.The person in the room was heavily armed.Agent *Ivankov had to act quick in order.He picked up his phone and called some unknown number.     I think it was +555-49-796I can't really remember...He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21Then after that he disappeared from my sight.As if he vanished in the shadows.A moment, shorter than a second, later, I saw the person flying off the top floor.I really don't know what happened there.This is all I saw, that night.I cannot explain it myself...`])
