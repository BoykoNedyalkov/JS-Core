let f = (function () {
    String.prototype.ensureStart = function (str) {
        let newString = ''
       if(!this.startsWith(str)){
           newString += str;

       }
        newString += this;
        return newString;
    };
    String.prototype.ensureEnd = function (str) {
        let newString = ''
        if(!this.endsWith(str)){
            newString += this;
            newString += str;
        }
        else
            newString += this;


        return newString;
    };
    String.prototype.isEmpty = function () {
        if(this.length == 0){
            return true
        }else{
            return false
        }
    };
    String.prototype.truncate = function (n) {
        if(this.length <= n)return this.toString();
        if(n<4){
            return '.'.repeat(n)
        }
        if(!this.includes(' ')){
            return this.slice(0,n-3)+'...'
        }

        let tokens = this.split(' ');
        let result = tokens[0];
        for (let i = 1; i < tokens.length; i++) {
            if(result.length + tokens[i].length + 4 > n){
                return result+'...'
            }
            result += ` ${tokens[i]}`
        }
    };
    String.format = function (str, ...params) {
       return str.replace(/\{([\d]+)}/g, function (m,g) {
           if(params[Number(g)]!= undefined){
         return params[Number(g)]
           }
           return m ;
       })
    }
})();

let string = 'Gosho qde pishki';
console.log(string.ensureStart('Pede'));
console.log(string.ensureEnd('PEDE'));
console.log(string.truncate(20));
console.log(string.isEmpty());
console.log(string.format());
