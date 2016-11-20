function main() {
    let solution = {
    list: [],
        size:0,
        add: function(element) {
            if(typeof element != 'string'){
                solution.list.push(Number(element));
                solution.size++;
            }

        solution.list.sort(function (a,b) {
            return a-b;
        });
            return solution.list;
    },
    remove: function (index) {
        if(index >=0 &&solution.list.length>= 0 && index <= solution.list.length-1){
            solution.list.splice(index,1);
            solution.size--;
            solution.list.sort(function (a,b) {
                return a-b;
            });

        }else
            return solution.list;
    },
    get: function (index) {
        if(index >=0 && solution.list.length>= 0 && index <= solution.list.length-1) {
            solution.list.sort(function (a,b) {
                return a-b;
            });
            return solution.list[index];
        }
        else
            return undefined;


    }
    };
    solution.list.sort(function (a,b) {
        return a-b;
    });
    return solution;
}
main()