function main(selector) {

    let button = $(selector);

    button.on('click', function () {
        let summary = ``;
        let p =$('<p>');
        let summaryDiv = $(`<div id="summary"><h2>Summary</h2></div>`)
        let toBeSummarized = $('#content').find($(`strong`));
        for(let item of toBeSummarized){
           let text = $(item).text();
            summary += text;
        }
            $(p).text(summary);
            $(p).appendTo($(summaryDiv));
        $(summaryDiv).appendTo($(`#content`))
    });

}