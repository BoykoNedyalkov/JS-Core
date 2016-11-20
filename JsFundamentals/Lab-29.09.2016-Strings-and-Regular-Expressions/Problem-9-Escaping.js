function htmlList(items) {
    console.log("<ul>");
    console.log(items.map(htmlEscape).map(
            item => `  <li>${item}</li>`).join('\n'));
     console.log("</ul>\n");
    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}
document.write(htmlList(["<br>", "It's OK"]))

