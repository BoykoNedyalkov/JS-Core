function solve([day,month,year]) {
    [day,month,year] = [day,month,year].map(Number);
    let date = new Date(year,month-1,day);
    let prevMonth = new Date (year,month-1,0);
    let nextMonth = new Date (year,month,1);
    let transferedToeNextLine = 0;
    let x = date.getDay();
    console.log(x);
    console.log(date.getDate());
    console.log(date.getMonth());
    console.log(date.getFullYear());
    let firstDateOfTheMonth = new Date(year,month-1,1)
    let lastDateOfTheMonth = new Date(year,month,0)
    let daysFromThePreviousMonth = 7 -(7 - firstDateOfTheMonth.getDay());
    let daysFromTheNextMonth = 6 - lastDateOfTheMonth.getDay();
    let firstDaysFromCurrentMonth = 7 -daysFromThePreviousMonth;
    if(firstDateOfTheMonth.getDay() == 0){
        daysFromThePreviousMonth = 0;
    }
    console.log('<table>');
    console.log('<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>')
    let html = `    <tr>`;
    for (var i = prevMonth.getDate()-daysFromThePreviousMonth+1; i <= prevMonth.getDate(); i++) {
        html += `<td class="prev-month">${i}</td>`;
        daysFromThePreviousMonth --;
    }
    for (var z = 1; z <= firstDaysFromCurrentMonth; z++) {
        if(z == date.getDate()){
            html += `<td class="today">${z}</td>`
        }
        else {
            html += `<td>${z}</td>`
        }
        transferedToeNextLine = z+1;
    }
    console.log(html+`</tr>`);
    for (var rows = 0; rows < Math.ceil((lastDateOfTheMonth.getDate() - z)/7); rows++) {
        html = `    <tr>`;
        for (var cols = 1; cols <= 7;  cols++) {
            if (transferedToeNextLine == date.getDate()){
                html += `<td class="today">${transferedToeNextLine}</td>`
            }
            else{
                html += `<td>${transferedToeNextLine}</td>`
            }
            transferedToeNextLine ++ ;
            if(transferedToeNextLine == lastDateOfTheMonth.getDate()+1) {
                transferedToeNextLine = 1;
                break;
            }
        }
        for (var h = transferedToeNextLine; h <= daysFromTheNextMonth; h++) {
            html += `<td class="next-month">${h}</td>`
        }
        html += `</tr>`;
        console.log(html)
    }
    console.log(`</table>`)
}
solve([1,1,2012])