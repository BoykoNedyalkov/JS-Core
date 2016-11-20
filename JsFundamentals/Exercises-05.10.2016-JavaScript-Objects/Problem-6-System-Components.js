function main(arr) {

    let systems = new Map();
    for(let line of arr) {
        let [systemName, componentName,subComponentName]= line.split(' | ');
        if(!systems.has(systemName)) {
            systems.set(systemName, new Map());
            systems.get(systemName).set(componentName, []);
            systems.get(systemName).get(componentName).push(subComponentName);
        }
        else if(!systems.get(systemName).has(componentName)){
            systems.get(systemName).set(componentName, []);
            systems.get(systemName).get(componentName).push(subComponentName);
        }

        else {
            if(systems.get(systemName).get(componentName).indexOf(subComponentName) < 0){
            systems.get(systemName).get(componentName).push(subComponentName)
            }
        }
    }
    //console.log(systems)
    let items = Array.from(systems.keys()).sort(function (a,b) {
        let arr1 = Array.from(systems.get(a).keys());
        let arr2 = Array.from(systems.get(b).keys());
        if (arr2.length == arr1.length)
            console.log(a,b)
            return a.localeCompare(b);

        return arr2.length - arr1.length;
    });
    for (let item of items){
        console.log(item)
        let array = Array.from(systems.get(item).keys()).sort(function (a,b) {
            let arr1 = Array.from(systems.get(item).get(a));
            let arr2 = Array.from(systems.get(item).get(b));
           /* if(arr2.length == arr1.length)
                return a.localeCompare(b)*/

            return arr2.length - arr1.length;

        })

        for(let x of array){
            console.log(`|||${x}`)
            let subArray =  systems.get(item).get(x);
            for(let y of subArray){
                console.log(`||||||${y}`)
            }
        }

    }
}
main(['Lambda | CoreB | B24',
    'Shift | CoreB | B27',
    'Shift | CoreB | B27',
    'Shift | CoreB | A23',
    'Shift | CoreB | A23',
    'Shit | CoreA | A23',
    'Shit | CoreA | A24',
    'Shit | CoreA | A25',
    'Shit | CoreA | C4',
    'azzzz | CoreB | B24',
    'azzzz | CoreB | B27',
    'azzzz | CoreB | B27',
    'azzzz | CoreA | A23',
    'azzzz | CoreA | A23',
    'azzzz | CoreA | A23',
    'azzzz | CoreA | A24',
    'azzzz | CoreA | A25',
    'azzzz | CoreC | C4',
    'SULS | Digital Site | Login Page',
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Indice | Session | Default Security',
    'Indice | Session | Default Storage'

])