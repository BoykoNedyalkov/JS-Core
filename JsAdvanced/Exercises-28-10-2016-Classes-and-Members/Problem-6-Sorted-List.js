class SortedList{
       constructor(){
           this.list =  [];
           this.size = 0;
       }
        add(element){
                this.list.push(Number(element));
                this.size++;

            this.list.sort(function (a,b) {
                return a-b;
            });
        }
        remove(index){
            if(index >=0 &&this.list.length>= 0 && index <= this.list.length-1){
                this.list.splice(index,1);
                this.size--;
                this.list.sort(function (a,b) {
                    return a-b;
                });

            }
        };
        get(index) {
            if(index >=0 && this.list.length>= 0 && index <= this.list.length-1) {
                this.list.sort(function (a,b) {
                    return a-b;
                });
                return this.list[index];
            }
        }
}

let list = new SortedList()
list.add(5);
console.log(list.get(0));