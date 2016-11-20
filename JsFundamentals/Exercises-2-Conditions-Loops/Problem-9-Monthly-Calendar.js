function solve([day,month,year]) {
    [day,month,year] = [day,month,year].map(Number);
    let date = new Date(year,month-1,day);
    let lastOfTheMonth = new Date(year , month, 0);
    let firstOfTheMonth = new Date([date.getFullYear(),month,1]);
    let afterTheFirstWeek = 0;
    let lastDayOfTheWeek = lastOfTheMonth.getDay();
    let firstDayOfTheWeek = firstOfTheMonth.getDay();
    let remainingDays = 0;
    if(firstDayOfTheWeek != 7 ){
        remainingDays = Math.abs(7-firstDayOfTheWeek);
        let x = remainingDays;
        remainingDays = 6 - remainingDays;
    }
    else {
        remainingDays = 1;
    }
    let lastOfThePreviousMonth= new Date(year,month-1,0);


    console.log(`<table>`)
    console.log('<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>')
    let html = '<tr>'
    if (firstDayOfTheWeek != 7){
        for (var rows = lastOfThePreviousMonth.getDate()-remainingDays; rows <= lastOfThePreviousMonth.getDate(); rows++) {
            html += `<td class="prev-month">${rows}</td>`

        }
        for (var i = 1; i <= remainingDays; i++) {
            html += `<td>${i}</td>`;
            afterTheFirstWeek = (6-i)+1;
        }
        html +=`</tr>`
        console.log(html);
        if(afterTheFirstWeek == 0)
        {afterTheFirstWeek =1}

    }
    else{
        afterTheFirstWeek = 1;
    }

    for (var i = 1; i < 6; i++) {

        html = '<tr>';
        for (var j = afterTheFirstWeek; j <= 7+afterTheFirstWeek; j++) {
            if(j > lastOfTheMonth.getDate()){
                afterTheFirstWeek = j-7;
                break;

            }
            html +=`<td>${j}</td>`

        }

        let firstOfTheNextMonth = new Date(year,month+1,1);
       /*console.log(firstOfTheNextMonth.getDay());
        console.log(firstOfTheNextMonth.getDate())
        console.log(firstOfTheNextMonth.getMonth())
        console.log(firstOfTheNextMonth.getUTCFullYear())
        */
        afterTheFirstWeek +=7;

        if(afterTheFirstWeek > lastOfTheMonth.getDate()){
            for (var rows = 1; rows <=firstOfTheNextMonth.getDay(); rows++) {
                html += `<td class="next-month">${rows}</td>`

            }
            html += `</tr>`;
            console.log(html);
            break;
        }
        else {
            for (var j = 1; j < 6-firstOfTheNextMonth.getDay(); j++) {
                let lastHtml =`<td>${j}</td>`

            }
            html += `</tr>`;
            console.log(html)
        }
    }
    console.log(`</table>`)
}
solve([24,12,2012])
