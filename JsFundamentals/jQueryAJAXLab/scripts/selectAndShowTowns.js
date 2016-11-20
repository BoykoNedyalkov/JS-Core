function showTowns() {
    $('#showTownsButton').click(function() {
        let selectedLi = $('#items li[data-selected=true]');
        let towns = selectedLi.map((i, x) => x.innerText).get().join(', ');
        let townsDiv = $('<div>').text("Selected towns: " + towns);
        $('body').append(townsDiv)
    })
}

    $('#items li').click(function() {
        let li = $(this);
        if (li.attr('data-selected')) {
            li.removeAttr('data-selected');
            li.css('background', '')
        } else {
            li.attr('data-selected', 'true');
            li.css('background', '#DDD');
        }
    })
