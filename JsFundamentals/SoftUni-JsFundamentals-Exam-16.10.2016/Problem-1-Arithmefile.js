function main(arr) {
    let result = [];
    let maximum = Number.NEGATIVE_INFINITY;
    for (var i = 0; i < arr.length; i++) {

        let number = Number(arr[i]);
        if(number >= 0 && number <10){
            let index = i+1;
            let product = 1;
            for (var j = 0; j <= number; j++) {

                let variable = Number(arr[index])
                product = product * variable;
                index++;
            }
            if(product > maximum){
                maximum = product
            }

        }

    }
    console.log(maximum)
}
main(["2","30","44","123","3","56","20","24"])