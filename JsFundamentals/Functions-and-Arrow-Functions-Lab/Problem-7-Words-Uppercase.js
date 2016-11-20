function solve([str]) {
    var strUpper = str.toUpperCase();
    var words = extractWords();
    words = words.filter(w => w !='');
    return words.join(', ');
    function extractWords() {return strUpper.split(/\W+/);}

}
solve(['Hi, how are you?']);
