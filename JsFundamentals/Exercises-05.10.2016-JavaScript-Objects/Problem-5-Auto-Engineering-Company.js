function cityMarkets(sales) {
    let cars = new Map();
    for (let sale of sales) {
        let [car, model, price] = sale.split(' | ');
        price = Number(price);
        if (!cars.has(car)) {
            cars.set(car, new Map());
        }
        let priceA = price;
        let kolio = cars.get(car).get(price);
        if (kolio) price += kolio;
        cars.get(car).set(model, price);
    }
    console.log(cars);
    for(let [car] of cars){
        console.log(`${car}`);
        for(let [model,price] of cars.get(car)){
            console.log(`###${model} -> ${price}`)
        }

    }

}


function main(sales){
    let townsWithProducts = new Map();
    for (let sale of sales) {
        let [town, product, income] = sale.split(' | ');
        income = Number(income);
        if (!townsWithProducts.has(town))
            townsWithProducts.set(town, new Map());
        // let incomeA = income;
        let oldIncome = townsWithProducts.get(town).get(product);
        if (oldIncome) income += oldIncome;
        townsWithProducts.get(town).set(product, income);
    }
    for (let [town] of townsWithProducts) {
        console.log(`${town}`);
        for (let [product,income] of townsWithProducts.get(town)) {
            console.log(`###${product} -> ${income}`)
        }
    }
}

    main(['Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000',
    'Mercedes-Benz | W163 | 200']);