import {Employee} from './employee'
export class Branch{
    constructor(id,branchName,companyName){
        this.id = id;
        this.branchName = branchName;
        this.companyName = companyName;
        this._employees = [];
    }
    set id(val){
        this._id = val;
    }
    get id(){
        return this._id;
    }
    set branchName(val){
        this._branchName = val;
    }
    get branchName(){
        return this._branchName
    }
    set companyName(val){
        this._companyName = val;
    }
    get companyName(){
        return this._companyName
    }
    get employees(){
        return this._employees
    }
    hire(employee){
        if(employee instanceof  Employee){
            this.employees.push(employee)
        }
        
    }
    toString(){
        let string =`@ ${this.companyName}, ${this.branchName}, ${this.id}` + '\n'
        string += `Employed:`
        if(this.employees.length == 0){
            string += '\n'+'None...'
        }
        else {
            for(let employee of this.employees){
                string += '\n' + `** ${employee}`
            }
        }
        return string;
    }


}
