function productOfThreeNumbers(numbs) {
   let numb1 = Number(numbs[0]);
   let numb2 = Number(numbs[1]);
   let numb3 = Number(numbs[2]);
    let result = numb1 * numb2 * numb3;
   checkIfNegative(result)
    if(checkIfNegative() == true)
        console.log("Negative")
    else
        console.log("Positive")
    function checkIfNegative() {
        if(result >= 0)
            return false;
        return true;
    }

}
productOfThreeNumbers(['2','3','-1'])
