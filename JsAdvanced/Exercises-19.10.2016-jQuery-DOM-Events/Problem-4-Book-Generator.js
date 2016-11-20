function createBook(s, t, a, c) {
    let selectorDiv = $(s);
    let title = t;
    let author = a;
    if(!String.hasOwnProperty('kur')){
        String.kur = 1;
    }

    let code = Number(c);
    let bookIterator = 0;
    let div = $('<div>');
    let authorP = $('<p>');
    let titleP = $('<p>');
    let codeP = $('<p>');
    let selectBtn = $('<button>');
    let deselectBtn = $('<button>');
    selectBtn.text("Select")
    deselectBtn.text("Deselect")
    authorP.addClass('author');
    titleP.addClass('title');
    codeP.addClass('isbn');
    authorP.text(author);
    titleP.text(title);
    codeP.text(code)

    selectBtn.on('click', function () {
        let bookDiv = $(this).parent()
        bookDiv.css("border", "2px solid blue")
    })
    deselectBtn.on('click', function () {
        let bookDiv = $(this).parent()
        bookDiv.css("border", "")
    })
    div.append(titleP)
        .append(authorP)
        .append(codeP)
        .append(selectBtn)
        .append(deselectBtn)
    div.attr('id', `book${incrementCounter()()}`)
    div.appendTo(selectorDiv);
    String.prototype.kur++;
    function incrementCounter() {
        return function () {
            let a = String.kur++;
            console.log(a);
            return a
        }
    }
}
