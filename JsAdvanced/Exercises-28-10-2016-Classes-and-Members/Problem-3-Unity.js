function main() {
    class Rat{
        constructor(name){
            this.name = name;
            this.unitedRats = [];
        }
        unite(otherRat){
            if(otherRat instanceof Rat){
                this.getRats().push(otherRat)
            }
        };
        getRats(){
            return this.unitedRats;
        }
        toString(){
            let string = ``;
            string += `${this.name}\n`;
            for(let rat of this.unitedRats){
                string += `##${rat.name}\n`
            }
            return string;
        }
    }
    let r1 = new Rat('Ivan');
    let r2 = new Rat('Pesho');
    let r3 = new Rat('Gosho');
    r1.unite(r2);
    r1.unite(r3);
    console.log(r1.toString())
}

main()