function setValueToIndex(arr) {
        let n = Number(arr[0]);
        let result = [];
        let string = "";
        for (i=0 ; i< n; i++){
            result[i]=0;
        }
        for(i = 1 ; i<arr.length ; i++){
            string = arr[i];
            let index = string[0];
            let value = string[string.length-1]
            if(string[string.length-2] == "-"){
                value = value* (-1);
            }
            let resultIndex = Number(index)
            let resultValue = Number(value);
            result[index] = value;
        }
        for (i = 0 ; i<n ; i++){
            console.log(result[i])
        }

}
setValueToIndex(['5', '0 - 3', '3 – -1', '4 – 2'])