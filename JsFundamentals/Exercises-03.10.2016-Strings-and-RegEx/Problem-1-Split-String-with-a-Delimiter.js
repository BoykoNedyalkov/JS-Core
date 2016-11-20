function main([string, delimiter]) {
    let splitString = string.split(delimiter);
    for (var i = 0; i < splitString.length; i++) {
        console.log(splitString[i]);

    }
}
main(['One-Two-Three-Four-Five','-']);