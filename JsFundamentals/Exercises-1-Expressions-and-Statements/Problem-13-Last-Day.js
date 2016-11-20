function lastDat([day, month, year]) {
    let date = new Date(year, month-1  ,2);
    let lastDate = (new Date(date.getFullYear(), date.getMonth() ,0));
    let a = lastDate.getDate()
    console.log(a)
    console.log(lastDate)
    console.log(date)
}
lastDat(['17','3','2002'])