function tableBuilder(selector) {
    let gosho = $(selector)
    $(gosho).children().remove()
    let table = $('<table>')
    function createTable(columnNames){
            if (columnNames.length > 0){
                let tableRow = $('<tr>')
                for(let item of columnNames){
                    let header = $ (`<th>`)
                    $(header).text(item)
                    $(header).appendTo(tableRow)
                }
                let button = $(`<th>`)
                $(button).text('Action')
                $(button).appendTo(tableRow)
                $(tableRow).appendTo(table)
                $(table).appendTo($(gosho))
            }
    }
    function fillData(dataRows) {
        if(dataRows.length > 0){

            for(let row of dataRows){
                let tableRow = $(`<tr>`);
                if(row.length > 0){
                    for(let cell of row){
                        let tableData = $(`<td>`);
                        tableData.text(cell);
                        $(tableData).appendTo($(tableRow))
                    }
                    let button = $(`<td><button>Delete</button></td>`)
                    $(button).find('button').on('click',function () {
                        ($(button).parent()).remove()
                    });
                    $(button).appendTo($(tableRow))
                }
                $(tableRow).appendTo($(gosho).children()[0])
            }

        }
        
    }
    return{createTable, fillData}
}