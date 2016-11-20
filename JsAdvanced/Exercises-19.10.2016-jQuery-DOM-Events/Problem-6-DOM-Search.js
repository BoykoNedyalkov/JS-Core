/*function domSearch(selector,cs) {
    let items = [];
    
    function addElements() {
        let element = $(`.add-controls`).find(`input`).val();
        console.log(element)
        let item = $(`<li class='list-item'><a class='button'>X</a>` +
            `<strong>${element}</strong>` +
            `</li>`);
        item.find('a').click(deleteElement)
        $('.items-list').append(item)
    }
    function deleteElement() {
        $(this).parent().remove()
        
    }
    
    function generateHTML(selector,cs) {
        let addControls = $("<div class='add-controls'>" +
            "<label>Enter text: <input></label>" +
            "<a class='button' style='display:" +
            " inline-block'>Add</a>");

        let searchControls = $("<div class='search-controls'>" +
            "<label>Search: <input></label>");

        let resultControls = $("<div class='result-controls'>" +
            "<ul class='items-list'>" +
            "</ul>");

        addControls.find('a').click(addElements);
        searchControls.find('input').change(search);

        $(selector).append(addControls);
        $(selector).append(searchControls);
        $(selector).append(resultControls);
    }
    function search() {
        let word = $(`.search-controls`).find('input').val();
        if(!cs){
            word = word.toLowerCase();
        }
        let items =  $(`.items-list li`);
        for (var i = 0; i < items.length; i++) {
            let item = items.eq(i);
            let textContent = item.find('strong').text();
            if(!cs){
                textContent = textContent.toLowerCase()
            }
            if(!textContent.includes(word)){
                items.eq(i).css('display','none')
            }
            else{
                items.eq(i).removeAttr('style')
            }

        }
    }
generateHTML(selector,cs)

}*/
function domSearch(selector, cs) {
    function addElement() {
        let elementText = $('.add-controls input').val();
        let li = $(`<li>${elementText}</li>`)
    }

    function createHTML(selector) {
        let enterText = $(`<div class="add-controls"><label>Enter text: <input></label><a class="button" style="display: inline-block;">Add</a></div>`)

        let search = $(`<div class="search-controls"><label>Search: <input></label></div>`);

        let result = $(`<div class="result-controls"><ul class="items-list"></ul></div>`);
        $(selector).append(enterText)
        $(selector).append(search)
        $(selector).append(result)
           enterText.find('a').click(addElement);
    }
    createHTML(selector);

}