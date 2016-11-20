function wikiParser(selector) {
    let content = $(selector);
    let text = content.text();

    text = replaceTag(text, '===','h3');
    text = replaceTag(text, '==','h2');
    text = replaceTag(text, '=','h1');
    text = replaceTag(text, `'''`,"b");
    text = replaceTag(text, "''","i ");
    text = replaceAnchor(text);

    function replaceTag(str, symbol, tag) {
        let pattern = `${symbol}(.*?)${symbol}`;
        let regex = new RegExp(pattern,'g');
        let result = str.replace(regex,(m,g) => `<${tag}>${g}</${tag}>`);

        return result;
    }
    function replaceAnchor(str) {
        let result = str;

        let pattern = `\\[\\[([^\\[\\]]*?)\\|([^\\[\\]]*?)\\]\\]`;
        let regex = new RegExp(pattern,'g');
        result = result.replace(regex,(m,g1 , g2)=> `<a href="/wiki/${g1}">${g2}</a>`)


         pattern = `\\[\\[([^\\[\\]]*?)\\]\\]`;
         regex = new RegExp(pattern,'g');
        result = result.replace(regex,(m,g)=> `<a href="/wiki/${g}">${g}</a>`)
        return result;
    }

    content.html(text)
}