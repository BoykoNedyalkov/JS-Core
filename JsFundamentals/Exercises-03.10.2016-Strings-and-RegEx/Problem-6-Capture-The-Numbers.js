function main(strings) {
    let pattern = /[0-9][0-9]*/g;
    let result = [], match;
    for (let string of strings) {
        while (match = pattern.exec(string)){
            result.push([match[0]]);
          }
    }
    console.log(result.join(' '));
}
main(['The300',
    'What is that?',
        'I think it’s the 3rd movie.',
    'Lets watch it at 22:45'
])