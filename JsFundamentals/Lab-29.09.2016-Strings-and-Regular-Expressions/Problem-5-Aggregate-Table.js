function solve(lines) {
    let sum = 0;
    let list = [];
    for(let line of lines){
        let townData = line.split('|');
        let townName = townData[1].trim();
        let income = Number(townData[2].trim());
        list.push(townName);
        sum += income;
        /*console.log(townData.join(';'));
        console.log(townData.length);*/
    }
console.log(list.join(', ')+'\n' + sum);
}
solve([
'| Sofia      | 300',
'| Plovdiv    | 500',
'| Varna      | 200',
'| Yambol     | 275'
])