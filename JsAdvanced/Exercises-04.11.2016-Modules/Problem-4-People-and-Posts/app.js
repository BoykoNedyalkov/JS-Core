class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    get addToSelector(){
        let div = $('<div>');
        div.addClass(`person ${this.name}`)
        let p1 = $(`<p class='name'>${this.name}</p>`)
        let p2 = $(`<p class='age'>${this.age}</p>`)
        let postsDiv = $('<div>')
        postsDiv.addClass(`posts ${this.name}`)
    }
}