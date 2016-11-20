function main([json]) {
    let html = "<table>\n";
    let arr = JSON.parse(json);
    html += `  <tr>`;
    for(let key of Object.keys(arr[0])){
        html+=`<th>${htmlEscape(key)}</th>`
    }
    html+=`</tr>\n`;
    for(let obj of arr){
        html +='  <tr>'
        for (let item of Object.keys(obj)) {
            html += `<td>${htmlEscape(obj[item])}</td>`
        }
        html+= '</tr>\n';
    }
    html+=`</table>`

    return html;
    function htmlEscape(text) {
        let g = Number(text);
        if (isNaN(g)){
            let map = { '"': '&quot;', '&': '&amp;',
                "'": '&#39;', '<': '&lt;', '>': '&gt;' };
            return text.replace(/[\"&'<>]/g, ch => map[ch]);
        }
        else
            return text;

    }
}
console.log(
    main([
            '[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'
        ])
)