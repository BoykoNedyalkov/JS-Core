function createMixins() {
    function computerQualityMixin(classToExtend) {
        let mixins = function () {
            this.getQuality = function() {
                return (this.processorSpeed +this.ram + this.hardDiskSpace)/3
            }
            this.isFast = function() {
                if(this.processorSpeed > (this.ram)/4)
                    return true;
                else
                    return false;
            }
            this.isRoomy = function() {
                if(this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed))
                    return true;
                return false;
            }
            return this
        }
        mixins.call(classToExtend.prototype)
    }

    function styleMixin(classToExtend){
        let mixins = function () {
            this.isFullSet  = function () {
                if(this.keyboard.manufacturer == this.monitor.manufacturer)
                    return true;
                return false
            }
            this.isClassy = function () {
                if(this.battery.expectedLife >= 3 &&(this.color == 'Silver' || this.color == "Black")&& this.weight<= 3 )
                    return true;
                return false
            }
            return this
        }
        mixins.call(classToExtend.prototype)

    }
    return {computerQualityMixin, styleMixin}
}