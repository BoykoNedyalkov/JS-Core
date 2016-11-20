class MailBox{
    constructor(){
        this.messages = [];
    }
    addMessage (subject,text) {
        let obj = {};
        obj.subject = subject;
        obj.text = text;
        this.messages.push(obj)
        return this;
    }
    get messageCount() {
        return this.messages.length;
    }
    deleteAllMessages () {
        this.messages = [];
    }
    findBySubject (substr) {
        let result = []
        for(let item of this.messages){
            let subject = Object.keys(item)[0]
            let text = Object.keys(item)[1]
            let a = item[subject]
            if(a.indexOf(substr) !== -1){
                let obj = {};
                obj.subject = item[subject];
                obj.text = item[text];
                result.push(obj)
            }
        }
        return result;
    }
    toString(){
        if(this.messages.length == 0){
            return " * (empty mailbox)"
        }
        else{
            let result = [];
            for(let item of this.messages){
                let subject = Object.keys(item)[0];
                let text = Object.keys(item)[1];
                let  string = ` * [${item[subject]}] ${item[text]}`;
                result.push(string)
            }
            return result.join('\n');
        }
    }

}
let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());
// let mb = new MailBox();
//
// mb.addMessage("meeting", "Let's meet at 17/11")
// mb.addMessage("beer", "Wanna drink beer tomorrow?")
// mb.addMessage("question", "How to solve this problem?")
// mb.addMessage("Sofia next week", "I am in Sofia next week.")
// console.log(mb.findBySubject('ee'))
// console.log(mb.toString())
