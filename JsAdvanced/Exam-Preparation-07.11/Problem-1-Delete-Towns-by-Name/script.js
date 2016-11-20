function attachEvents() {
    let list = $('#towns').children();
    let selector = $('#townName')
    let button = $('#btnDelete')
    $(button).on('click',function () {
        let deleteFormList = $(selector).val();
        let conter = 0;
        for(let item of list){
            if($(item).val() == deleteFormList){
                $('#result').text(`${deleteFormList} deleted.`);
                $(item).remove();
                conter++;
            }
            if(conter == 0){
                $('#result').text(`${deleteFormList} not found.`);
            }
        }
        $(selector).val('')
    })
}