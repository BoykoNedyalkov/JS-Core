function multiplyDivideNums (nums) {
    let num1 = Number(nums[0]);
    let num2 = Number(nums[1]);
    let result = 0;
    compare(num1, num2)
    console.log(result)

    function compare(num1, num2){
    if(num1 <= num2)
        result =  num1*num2;
    else
        result = num1 / num2;

    return result;
    }

}
multiplyDivideNums(['144','12'])
