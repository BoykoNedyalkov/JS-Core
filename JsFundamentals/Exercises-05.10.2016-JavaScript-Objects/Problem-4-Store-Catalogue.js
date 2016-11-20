function main(arr) {
    let products = {};
    for(let line of arr){
        let[name,price] = line.split(' : ');
        products[name] = Number(price);
    }
    let currentItem ='';
    for(let item of Object.keys(products).sort()){
        if(item[0] != currentItem){
            console.log(item[0]);
        }
        console.log(`  ${item}: ${products[item]}`)
        currentItem = item[0];
    }
}
main([`Banana : 2`,
`Rubic's Cube : 5`,
`Raspberry P : 4999`,
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10'
])