function argumentInfo() {
    let summary = {};
    for (var i = 0; i < arguments.length; i++) {
        var obj = arguments[i];
        var type = typeof obj;
        console.log(type+' '+ obj);
        if(!summary[type])
            summary[type] = 1;
        else
            summary[type]++;
    }
   // console.log(summary)
    let sortedTypes = [];
    for(let currentType in summary){
        sortedTypes.push([currentType,summary[currentType]])
    }
    sortedTypes.sort(function (a,b) {
        return b[1]-a[1];
    })
    for(let item of sortedTypes){
        console.log(`${item[0]} = ${item[1]}`)
    }

}
argumentInfo('cat', 42, function () { console.log('Hello world!'); });