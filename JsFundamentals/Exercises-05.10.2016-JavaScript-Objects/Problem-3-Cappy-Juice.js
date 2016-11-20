function main(arr) {
    let producedBottles={}
    let result = {};
    for(let line of arr){
        let [fruit,number] = line.split(' => ');
        number = Number(number);
        if(!producedBottles[fruit]){
            producedBottles[fruit] = number;
            if(producedBottles[fruit]>=1000){
                if (!result[fruit])
                    result[fruit] = producedBottles[fruit];
                else
                    result[fruit] = producedBottles[fruit];
            }
        }
        else {
            producedBottles[fruit] +=number;
            if (producedBottles[fruit] >= 1000){
                if (!result[fruit])
                    result[fruit] = producedBottles[fruit];
                else
                    result[fruit] = producedBottles[fruit];
            }
        }
        
    }
    for (let item of Object.keys(result)){
        console.log(`${item} => ${Math.floor(result[item]/1000)}`);
    }
}
main(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);