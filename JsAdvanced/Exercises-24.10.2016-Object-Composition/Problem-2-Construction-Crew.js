function main(obj) {
    if(obj.handsShaking){

        obj.bloodAlcoholLevel += ((obj.weight)/10)*obj.experience
        obj.handsShaking = false;
    }
return obj;
}
let obj = {
    weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true

};
console.log(main(obj))
