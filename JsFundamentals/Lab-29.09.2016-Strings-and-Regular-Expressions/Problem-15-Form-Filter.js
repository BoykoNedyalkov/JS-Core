function solve(data) {
    let [username, email, phone] = [data.shift(), data.shift(),data.shift()];
    data.forEach(line =>{
        "use strict";
        line = line.replace(/<![a-zA-Z]+!>/g,username);
        line = line.replace(/<@[a-zA-Z]+@>/g,email);
        line = line.replace(/<\+[a-zA-Z]+\+>/g,phone);
        console.log(line);
    });
}
solve(['pit', 'pit@pit.com', '032746', 'I am <!user!>, my email is <@email@>, my phone is <+p+>.'])
