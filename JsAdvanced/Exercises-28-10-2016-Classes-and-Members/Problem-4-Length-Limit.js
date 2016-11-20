class Stringer{
    constructor(innerString,innerLength){
        this.innerString = innerString;
        this.innerLength = Number(innerLength);
    }
    increase(length){
         this.innerLength += length;
    }
    decrease(length){
        if(this.innerLength - length < 0){
            this.innerLength = 0;
        }
        else{
            this.innerLength -=length;
        }
    }
    toString(){
        let string = this.innerString;
        if(string.length == 0){
            string = '...'
        }
        else if(string.length > this.innerLength && string.length > 0){
            let newString = string.slice(0,this.innerLength);
            newString += '...';
           string = newString
        }
            return string;
    }

}
let ivan =new Stringer(6561,33);
ivan.increase(1);
ivan.decrease(0);
console.log(ivan.innerLength)
console.log(ivan.toString());