function main(arr) {
    let people = new Map();
    for(let line of arr){
        let [input1,input2] = line.split('-');
        if (!input2){
            if(!people.has(input1)){
                people.set(input1,[])
            }
        }
        else{
            if(people.has(input2)&&people.has(input1)){
                if(input1 != input2){

                    people.get(input2).push(input1)
                }
            }

        }
    }

    //console.log(people)
    let mostSubsribers;
    people.forEach(function (value, key) {
        mostSubsribers = Array.from(people.keys()).sort(function (first, second) {
            if(people.get(second).length != people.get(first).length) {
                return people.get(second).length - people.get(first).length;
            }
                let firstSubscribedTo = 0;
                let secondSubscribedTo = 0;
                for(let items of people.keys()){
                    for(let item of people.get(items)){
                        if (item == first){
                            firstSubscribedTo++;
                        }
                        if(item == second){
                            secondSubscribedTo++;
                        }
                    }
                }
               if(secondSubscribedTo > firstSubscribedTo){
                    return people.get(second).length - (people.get(first).length-90);
               }
                else {
                   return (people.get(second).length-90) - people.get(first).length;
               }


        })[0];
        //console.log(`${key} -> ${lowestPrice[1]} (${lowestPrice[0]})`)
    })
    let number = 1;
    console.log(`${mostSubsribers}`)
    for(let item of people.get(mostSubsribers)){

        console.log(`${number}. ${item}`);
        number++;
    }


}
main(['A',
    'B',
    'C',
    'D',
    'A',
    'E',
    'C-B',
    'D-B',
    'B-C',
    'B-D',
    'A-B',
    'B-A',
    'C-A',
    'D-A'
])