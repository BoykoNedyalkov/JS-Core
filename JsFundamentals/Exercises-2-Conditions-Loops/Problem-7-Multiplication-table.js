function solve([n]) {
console.log(`<table border="1">`);
    for (let rows = 0; rows <= n; rows++) {
        if (rows != 0){
         var line = '<tr>';
        line += `<th>${rows}</th>`;
        for (let cols = 1; cols <= n; cols++) {
            line += `<td>${cols*rows}</td>`;

        }
        line += '</tr>';
        console.log(line);
        line = '';
    }
        else{
            line = `<tr>`;
            line +=`<th>x</th>` ;
            for (var cols = 1; cols <= n; cols++) {
               line += `<th>${cols}</th>`;
            }
            line += `</tr>`;
            console.log(line);
            line = '';
        }
    }
    console.log(`</table>`)
}
solve([5])