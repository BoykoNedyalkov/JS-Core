function addItem() {
    let text = document.getElementById('input').value;
    let list = document.getElementById('list');
    let listItem = document.createElement('li');
    listItem.innerText = text;
    console.log(listItem)
    list.appendChild(listItem)
    
}
