function main(lines) {
    let Products = new Map();
    for (let line of lines) {
        let [townName, productName, productPrice] = line.split(/\s*\|\s*/);
        productPrice = Number(productPrice)
        if (!Products.has(productName)) {
            Products.set(productName, new Map());
        }
        
        //let oldPrice = Products.get(productName).get(productPrice);

        Products.get(productName).set(townName,productPrice);



    }
   // console.log(Products);
   /* for(let current of Products.entries()){
       // console.log(current)
        let line = `${current[0]} ->`
        let elementArr = Array.from(current[1].keys()).sort().reverse();
        //console.log(line)
        console.log(elementArr)
    }*/
    Products.forEach(function (value, key) {

        let lowestPrice = Array.from(value.entries()).sort(function (first, second) {
            return first[1] - second[1];
        })[0];
        console.log(`${key} -> ${lowestPrice[1]} (${lowestPrice[0]})`)
    })


    // TODO: print the incomes by towns and products
}
main(['Sofia City | Audi | 100000'
    ,'Sofia City | BMW | 100000'
    ,'Sofia City | Mitsubishi | 10000'
    ,'Sofia City | Mercedes | 10000'
    ,'Sofia City | NoOffenseToCarLovers | 0'
    ,'Mexico City | Audi | 1000'
    ,'Mexico City | BMW | 99999'
    ,'New York City | Mitsubishi | 10000'
    ,'New York City | Mitsubishi | 1000'
    ,'Mexico City | Audi | 100000']);