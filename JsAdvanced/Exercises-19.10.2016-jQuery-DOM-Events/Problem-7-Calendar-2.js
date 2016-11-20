function solve([day,month,year]) {
    let months = ['January', 'February ', 'March ', 'April ', 'May ', 'June ', 'July ', 'August ',
        'September', 'October', 'November', 'December'];
    [day,month,year] = [day,month,year].map(Number);
    let date = new Date(year,month-1,day);
    let firstOfTheMonth = new Date (year,month-1,1);
    let lastOfTheMonth = new Date (year,month,0);
    console.log(date.getDate(),date.getMonth(),date.getFullYear());
    console.log(firstOfTheMonth.getDate(),firstOfTheMonth.getMonth(),firstOfTheMonth.getFullYear());
    console.log(firstOfTheMonth.getDay());
    let tableStart = $(`<table> <caption>${months[month-1]} ${date.getFullYear()}</caption><tbody>`+
        '<tr>' +
        '<th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th><th>Sun</th></tr>');
    let html = `    <tr>`;
    let daysFormThePreviousMonth =firstOfTheMonth.getDay()-1;
    if(firstOfTheMonth.getDay() == 0)
        daysFormThePreviousMonth = 6;

    for (var i = 0; i < daysFormThePreviousMonth; i++) {
        html += `<td></td>`;
    }
    for (var z = 1  ; z <= 7-daysFormThePreviousMonth  ; z++) {
        if(z == date.getDate()){
            html += `<td class="today">${z}</td>`
        }
        else {
            html += `<td>${z}</td>`
        }
    }
    let printDate = 8-daysFormThePreviousMonth;
    for (var row = 0; row < Math.ceil((lastOfTheMonth.getDate()-(7-daysFormThePreviousMonth))/7); row++) {
        html+=`<tr>`

        for (var col = 1  ; col <= 7  ; col++) {
            if(printDate == date.getDate()){
                html += `<td class="today">${printDate}</td>`
            }
            else {
                if(printDate > lastOfTheMonth.getDate())
                    html += `<td></td>`
                else
                    html += `<td>${printDate}</td>`

            }
            printDate++;
        }
        html+=`</tr>`

    }

    $(html).appendTo($(tableStart))

    $(`</table>`).appendTo($(tableStart))
    $(tableStart).appendTo($('#content'))
}
//solve([15,6,2017])