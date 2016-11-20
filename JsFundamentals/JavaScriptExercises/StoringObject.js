function KeyVal(arr) {
    let obj = {};
    let n = arr.length;
    let string = "";
    for ( i = 0 ; i< (n) ; i++){
        string = arr[i].split(' ');
        let key = string[0];
        let age = string[2];
        let grade = string[4]
        obj.Name = key ;
        obj.Age = age;
        obj.Grade = grade;
        console.log("Name: "+ obj.Name)
        console.log("Age: "+ obj.Age)
        console.log("Grade: "+ obj.Grade)
    }
    let y = arr[arr.length-1]
}
KeyVal(['Pesho -> 13 -> 6.00','Ivan -> 12 -> 5.57','Toni -> 13 -> 4.90'])