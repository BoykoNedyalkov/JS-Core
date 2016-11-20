function main(towns) {
    let townArr = [];
    for(let town of towns.slice(1)){
        let [empty,name,lat,lng] = town.split(/\s*\|\s/);
        let townObj = {
            Town:name,
            Latitude:Number(lat),
            Longitude:Number(lng)
        }
        townArr.push(townObj);

    }
    return JSON.stringify(townArr);
}
console.log(
    main([
        '| Town | Latitude | Longitude |',
        '| Sofia | 42.696552 | 23.32601 |',
        '| Beijing | 39.913818 | 116.363625 |'

    ])
);
