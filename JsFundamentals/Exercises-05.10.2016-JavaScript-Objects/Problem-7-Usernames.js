function main(arr) {
    let result = {};
   arr.sort(function (a,b) {
        if(a.length == b.length){
            return a.localeCompare(b)
        }

        return a.length-b.length;
    })
    for(let item of arr){
       if(!result[item]){
           result[item] = item;
       }
    }
    for (let x of Object.keys(result)){
        console.log(result[x]);
    }
}
main(['Ashton',
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'
])