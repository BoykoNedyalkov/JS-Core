function main(strings) {
    //let pattern = /\b([w]{3})\.([a-zA-Z0-9]*)(-)?(\.)?([a-zA-Z0-9]+)?(\.)([a-zA-Z0-9]+)(\.)?([a-zA-Z0-9]+)?\b/g;
    let pattern = /(www)\.([a-zA-Z0-9-.?]+)\.([a-z]+)/g
    let result = [], match;
    for (let string of strings) {
        while (match = pattern.exec(string)){
            let final = match[0];
            result.push(final);
        }
    }
    console.log(result.join('\n'));
}
main(['You can check us at www.london-hotels.co.uk!We provide the best services in London.Here are some reviews in some blogs:"London Hotels are awesome!" - www.indigo.bloggers.com"I am very satisfied with their services" - ww.ivan.bg"Best Hotel Services!" - www.rebel21.sedecrem.moc']);