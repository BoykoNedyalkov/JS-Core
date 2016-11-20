function main(arr) {
    let specialKey = arr[0],match;
    arr.shift();
    let str = '((^|\\s)('+specialKey+'))(\\s+)([A-Z!%$#]){8,}(?=\\s|\\.|\\,|$)'
    let string = '([^|\\s])?('+specialKey+')\\b';
    let messagePatten = new RegExp('([A-Z!%$#]+){8,}(\s|\.|\,|$)','g')
    let keyPattern = new RegExp(str,'gi');
    for(let line of arr){
        let newLine;
        match = keyPattern[Symbol.match](line);
        while (match){
            let message = match[0].trim().split(' ');
            message = message[message.length-1]; let newMessage;
            let messageMatch = messagePatten[Symbol.match](message);
                if(messageMatch){
                     newMessage =  message.replace(/!/g,'1').replace(/%/g,'2').replace(/#/g,'3').replace(/\$/g,'4').toLowerCase()
                     newLine = line.replace(message,newMessage);
                    line = newLine;

                }

            match = keyPattern.exec(line)

        }
        console.log(line)
    }

}
main(["specialKey",
    "In this text the specialKey ##$$##$$ is correct, but",
    "the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while",
    "SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!"])/*
main(["enCode",
    "Some messages are just not encoded what can you do?",
    "RE - ENCODE THEMNOW! - he said.",
    "Damn encode, ITSALLHETHINKSABOUT, eNcoDe BULL$#!%."])*/