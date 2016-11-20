function main(input) {
    let html = '<table>\n';
    for (let line of input){
        html += `    <tr>\n`
        line = JSON.parse(line);
        for(let obj of Object.keys(line)){
            let a = line[obj];
            //console.log(line[obj]);
           //console.log(a)
            html+=`        <td>${a}</td>\n`

        }
        html+='    <tr>\n';

    }
    html+= `</table>`
    console.log(html)
}
main(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
])