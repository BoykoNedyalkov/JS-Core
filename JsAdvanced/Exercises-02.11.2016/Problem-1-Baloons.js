function main() {
    class Balloon{
        constructor(color,gasWeight){
            this.color = color;
            this.gasWeight = Number(gasWeight);
        }
    }
    class PartyBalloon extends Balloon{
        constructor(color,gasWeight,ribbonColor,ribbonLength){
            super(color,gasWeight);
                this.ribbonColor  = ribbonColor,
                this.ribbonLength  = Number(ribbonLength)
                let that = this;
                this._ribbon ={color: that.ribbonColor,length : that.ribbonLength }
        }


        get ribbon(){
           return this._ribbon
        }

    }
    class BirthdayBalloon extends PartyBalloon{
        constructor(color,gasWeight,ribbonColor,ribbonLength,text){
            super(color,gasWeight,ribbonColor,ribbonLength)
            this._text = text;
        }
        get text(){
            return this._text
        }
    }
    return{Balloon,PartyBalloon,BirthdayBalloon}
}