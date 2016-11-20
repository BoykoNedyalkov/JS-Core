function main([str,word]) {
    let pattern = new RegExp(`\\b${word}\\b`,'gi');
    let count = 0 ,match;
    match = pattern.exec(str);
    while(match){
        count++;
        match = pattern.exec((str));
    }
    console.log(count);
}
main(['There was one. Therefore I bought it. I wouldn’t buy it otherwise.','there'])