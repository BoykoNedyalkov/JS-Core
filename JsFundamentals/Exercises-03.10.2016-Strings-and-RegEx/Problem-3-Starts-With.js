function main([string,splitter]) {
    let result = string.split(splitter);
    if(result.length > 1){
        console.log(true)
    }
    else {
        console.log(false)
    }
}
main(['How have you been?', 'how']);
main(['The quick brown fox…',
'The quick brown fox…']);