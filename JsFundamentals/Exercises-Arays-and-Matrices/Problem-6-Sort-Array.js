function solve(input) {
    input.sort().sort((a,b) => a.length - b.length)
    console.log(input.join('\n'))
}
solve(['Isacc','Theodor','Jack','Harrison','George']);
solve(['test','Deny','omen','Default']);