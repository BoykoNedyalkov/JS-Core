function addCountryToTable(county , capital) {
    let row = $('<tr>')
        .append($("<td>").text(county))
        .append($("<td>").text(capital))
        .append($("<td>")
            .append($("<a href='#' onclick='moveRowUp(this)'>[Up]</a>"))
            .append(" ")
            .append($("<a href='#' onclick='moveRowDown(this)'>[Down]</a>"))
            .append(" ")
            .append($("<a href='#' onclick='deleteRow(this)'>[Delete]</a>"))
        );
    $('#countriesTable').append(row);
    fixRowLinks();
    return row;
}
$(function () {
    addCountryToTable("Bulgaria", "Sofia");
    addCountryToTable("Germany", "Berlin");
    addCountryToTable("Russia", "Moscow");
    addCountryToTable("France", "Paris");
    addCountryToTable("India", "Delhi")
    fixRowLinks();
});
function addCountry() {
    let country = $('#newCountryText').val();
    let capital = $('#newCapitalText').val();
    addCountryToTable(country,capital);
    row.hide();
    row.fadeIn();
    $('#newCountryText').val('');
    $('#newCapitalText').val('');
    fixRowLinks();
}
function deleteRow(link) {
    let row = $(link).parent().parent();
    row.fadeOut(function () {
        row.remove();
        fixRowLinks();
    })
}
function moveRowUp(link) {
    let row = $(link).parent().parent();
    row.fadeOut(function () {
        row.insertBefore(row.prev());
        row.fadeIn();
        fixRowLinks();
    })
}
function moveRowDown(link) {
    let row = $(link).parent().parent();
    row.fadeOut(function () {
        row.insertAfter(row.next());
        row.fadeIn();
        fixRowLinks();
    })
}
function fixRowLinks() {
    $('#countriesTable a').show();
    let tableRow = $('#countriesTable tr');
    $(tableRow[1]).find("a:contains('Up')").hide()
    $(tableRow[tableRow.length-1]).find("a:contains('Down')").hide()
}