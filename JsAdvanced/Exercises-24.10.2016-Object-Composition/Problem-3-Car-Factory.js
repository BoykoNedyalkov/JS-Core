function main(obj) {
    let power= 0;
    let volume = 0;
    let wheels = [];
    if(obj.power<=90){
        power = 90;
        volume = 1800;
    }else if(obj.power <= 120 && obj.power > 90){
        power = 120;
        volume = 2400;
    }else{
        power = 200;
        volume = 3500;
    }
    if(obj.wheelsize%2 == 0){
        wheels = [obj.wheelsize-1,obj.wheelsize-1,obj.wheelsize-1,obj.wheelsize-1]
    }else{
        wheels = [obj.wheelsize,obj.wheelsize,obj.wheelsize,obj.wheelsize]
    }
    let buildCar = {
        model: obj.model,
        engine : {
            power:power,
            volume: volume
        },
        carriage :{
            type: obj.carriage,
            color: obj.color
        },
        wheels: wheels
    };
return buildCar
}
let carPlans = {
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}

    console.log(main(carPlans))




