function main([score]) {
    let html = "<table>\n";
    html += "  <tr><th>name</th><th>score</th>\n";
    let arr = JSON.parse(score);
    for (let obj of arr){
        html += `  <tr>`;
        html += `<td>${htmlEscape(obj['name'])}</td>`;
        html += `<td>${htmlEscape(obj['score'])}</td>`;
        html += `</tr>\n`
    }
    html += "</table>";
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
    main(['[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]']
    ));