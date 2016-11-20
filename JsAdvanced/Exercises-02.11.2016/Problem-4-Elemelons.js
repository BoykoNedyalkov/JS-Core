function main() {
    class Melon{
        constructor(weight,melonSort){
            if(new.target === Melon){
                throw new Error("Abstract class cannot be instantiated directly");
            }
            this.weight = weight;
            this.melonSort = melonSort;
        }
    }
    class Watermelon extends Melon{
        constructor(weight,melonSort){
            super(weight,melonSort)
        }
        get elementIndex(){
            return this.weight * this.melonSort.length
        }
        toString() {
            return `Element: Water\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }
    class Firemelon extends Melon{
        constructor(weight,melonSort){
            super(weight,melonSort)
        }
        get elementIndex(){
            return this.weight * this.melonSort.length
        }
        toString() {
            return `Element: Fire\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }
    class Earthmelon extends Melon{
        constructor(weight,melonSort){
            super(weight,melonSort)
        }
        get elementIndex(){
            return this.weight * this.melonSort.length
        }
        toString() {
            return `Element: Earth\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }
    class Airmelon extends Melon{
        constructor(weight,melonSort){
            super(weight,melonSort)
        }
        get elementIndex(){
            return this.weight * this.melonSort.length
        }
        toString() {
            return `Element: Air\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }
    class Melolemonmelon extends Watermelon{
        constructor(weight,melonSort){
            super(weight,melonSort)
            this.melons = ['Fire', 'Earth', 'Air','Water']
            this.element = 'Water';
        }
        get elementIndex(){
            return (this.weight * this.melonSort.length)
        }
        morph(){
            let melon = this.melons.shift();
            this.element = melon;
            this.melons.push(melon)
        }
        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
        }
    }
// hui = new  Melolemonmelon(80,'asdasdasd');
// hui.morph()
// console.log('----')
// console.log(hui.toString())
// console.log('----')
// hui.morph()
// console.log(hui.toString())
// console.log('----')
// hui.morph()
// console.log(hui.toString())
// console.log('----')
//
// hui.morph()
// console.log('----')
// console.log(hui.toString())
// hui.morph()
// console.log('----')
// console.log(hui.toString())
   return{Melon,Watermelon,Firemelon,Earthmelon,Airmelon,Melolemonmelon}
}

