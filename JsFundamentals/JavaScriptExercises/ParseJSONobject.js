function parseJSONobject(arr) {
    let objects = arr.map(JSON.parse);
    let names = {};
    for (let obj of objects){
        console.log("Name: "+obj.name)
        console.log("Age: "+obj.age)
        console.log("Date: "+obj.date)
    }
}
parseJSONobject(['{"name":"Gosho","age":10,"date":"19/06/2005"}', '{"name":"Tosho","age":11,"date":"04/04/2005"}'])