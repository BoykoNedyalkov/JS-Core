  function main() {
    class Keyboard {
        constructor(manufacturer , responseTime){
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }
    class Monitor {
        constructor(manufacturer, width, height ){
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }
    class Battery {
        constructor(manufacturer, expectedLife){
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }
    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace){
            if(new.target === Computer)
                throw new Error;
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }
    class Laptop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace,weight,color,battery){
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
        }
        get battery(){
            return this._battery;
        }
        set battery(battery){
            if(battery instanceof Battery){
                this._battery = battery;
            }
            else {
                throw new TypeError
            }
        }
    }
    class Desktop extends Computer{
        constructor(manufacturer, processorSpeed, ram,hardDiskSpace, keyboard,monitor){
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
                this.keyboard = keyboard;
                this.monitor = monitor;
        }
        get keyboard(){
            return this._keyboard;
        }
        set keyboard(keyboard){
            if(keyboard instanceof Keyboard){
                this._keyboard = keyboard;
            }
            else {
                throw new TypeError
            }
        }
        get monitor(){
            return this._monitor;
        }
        set monitor(monitor){
            if(monitor instanceof Monitor){
                this._monitor = monitor;
            }
            else {
                throw new TypeError
            }
        }
    }
  // let keyboard = new Keyboard('Logitech',70);
  // let monitor = new Monitor('Benq',28,18);
  //
  //     let battery = new Battery('asdasd',88)
  //
  //     let laptop = new Laptop('asdasd',89,99,8,5,'brown',monitor)
  //     console.log(laptop)
  // let desktop = new Desktop("JAR Computers",3.3,8,1,battery,monitor);
  // desktop.keyboard = monitor;
  // console.log(desktop)

     return {
         Battery,
         Keyboard,
         Monitor,
         Computer,
         Laptop,
         Desktop
     }

 }