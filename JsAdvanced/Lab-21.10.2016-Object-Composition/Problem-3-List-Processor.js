function main(arr) {
    let commandProcessor = (() => {
        let list = [];
        return{
            add:(newItem) => list.push(newItem),
            remove:(item) => list = list.filter(x => x!= item),
            print: () => console.log(list)
        }
    })()
    for(let command of arr){
        let [commandName, arg] = command.split(' ');
        commandProcessor[commandName](arg)
    }
}
main(['add hello', 'add again', 'remove hello', 'add again', 'print'])