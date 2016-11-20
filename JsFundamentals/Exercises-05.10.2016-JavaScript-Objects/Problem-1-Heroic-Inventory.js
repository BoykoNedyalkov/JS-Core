function main(input) {
    let result = [];
    for(let line of input){
    let elements = line.split(' / ');
    let name = elements[0];
    let level = Number(elements[1]);
    let allItems = [];
    if(elements.length>2){
        allItems = elements[2].split(', ');
    }
     let hero = {
         name: name,
         level: level,
         items: allItems
     };
        result.push(hero);

    }
    console.log(JSON.stringify(result));
}
main(['Isacc / 25 /',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'])