let Console = require("../Problem-5-C#-Console").Console;
let expect = require("C:\\Users\\Boyko\\AppData\\Roaming\\npm\\node_modules\\chai").expect;
let should = require("C:\\Users\\Boyko\\AppData\\Roaming\\npm\\node_modules\\chai").should;
let assert = require("C:\\Users\\Boyko\\AppData\\Roaming\\npm\\node_modules\\chai").assert;

describe(`Console`,function () {
    it(`should have a function called writeLine`,function () {
        expect(Console.hasOwnProperty('writeLine')).to.equal(true)
    })
    describe(`writeLine`,function () {
        it(`when a single string argument is passed`,function () {
            expect(Console.writeLine('pesho')).to.equal('pesho','Did not return the string unchanged')
        })
        it(`when a single object argument is passed`,function () {
            expect(Console.writeLine({name:'pesho'})).to.equal(JSON.stringify({name:'pesho'}),'Did not return a JSON stringified object')
        })
        it(`when no argument is passed`,function () {
            expect(()=> Console.writeLine()).to.throw(Error)
        })
        it(`when a single invalid  argument is passed`,function () {
            expect(Console.writeLine(4)).to.equal(undefined,'did not return undefined')
        })
        it(`when a single invalid  argument is passed`,function () {
            expect(Console.writeLine(4)).to.equal(undefined,'did not return undefined')
        })
        it(`when an invalid message argument is passed`,function () {
            expect(()=> Console.writeLine(13,'sda')).to.throw(Error)
        })
        it(`when an  invalid  number of parameters is passed`,function () {
            expect(()=> Console.writeLine('Ivan went to {0} {1}','Bistrica')).to.throw(Error)
        })
        it(`when an  invalid  number of parameters is passed`,function () {
            expect(()=> Console.writeLine('Ivan went to {150}','Bistrica')).to.throw(Error,'Incorrect placeholders given')
        })
        it(`when more placeholders than parameters are passed`,function () {
            expect(()=> Console.writeLine('Ivan went to {0}, {1}','Bistrica')).to.throw(Error)
        })
        it(`when a single valid parameter is passed to the message`,function () {
            expect(Console.writeLine('Ivan went to {0}','Bistrica')).to.equal('Ivan went to Bistrica','Did not replace  placeholder properly')
        })
        it(`when several valid parameters are passed to the message`,function () {
            expect(Console.writeLine('{0}, {1}, {2}','idno','dvie','tri')).to.equal('idno, dvie, tri','Did not replace  placeholder properly')
        })
    })
});
