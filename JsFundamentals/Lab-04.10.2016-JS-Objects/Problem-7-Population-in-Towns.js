function main(rows) {
    let total = new Map();
    for(let row of rows){
        let[town,population] = row.split(/\s*<->\s*/);
        population = Number(population);
        if(total.has(town)){
            total.set(town,total.get(town)+population);
        }
        else{
            total.set(town, population);
        }

    }
    for(let[town, sum] of total){
        console.log(town + ' : '+sum);
    }
}
main(['B<->20', 'A<->30', 'B<->5']);