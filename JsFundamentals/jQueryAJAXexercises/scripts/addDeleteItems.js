'use strict';
function addItemToList(text) {
    let li = $('<li>')
        .append($("<span>").text(text))
        .append(" ")
        .append($("<a href='#' onclick='deleteItem(this)'>[Delete]</a>"))
    $("#items").append(li);
}
$(function () {
    addItemToList("First")
    addItemToList("Second")
})
function deleteItem(link) {
    $(link).parent().remove()
}
function addItem() {
    let text = $('#newItemText').val()
    addItemToList(text)
    $('#newItemText').val('');
    
}
function hideDeleteButton() {
    
}