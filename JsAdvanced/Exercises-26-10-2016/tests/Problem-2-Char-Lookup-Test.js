let lookupChar = require("../Problem-2-Char-Lookup").lookupChar;
let expect = require("C:\\Users\\Boyko\\AppData\\Roaming\\npm\\node_modules\\chai").expect;
let jsdom = require("C:\\Users\\Boyko\\AppData\\Roaming\\npm\\node_modules\\jsdom-global")();
let $ = require('C:\\Users\\Boyko\\AppData\\Roaming\\npm\\node_modules\\jquery');

describe('lookupChar',function () {
    it('with a non-string first parameter, should return undefined',function () {
        expect(lookupChar(13,0)).to.equal(undefined,
            'Function did not return the correct result!');
    });
    it('with a non-number second parameter, should return undefined',function () {
        expect(lookupChar('ivan','johny boy')).to.equal(undefined,
            'Function did not return the correct result!');
    });
    it('with a floating-point number as second parameter, should return undefined',function () {
        expect(lookupChar('ivan',1.13)).to.equal(undefined,
            'Function did not return the correct result!');
    });
    it('with an incorrect index value, should return incorrect index',function () {
        expect(lookupChar('ivan',115)).to.equal('Incorrect index',
            'Function did not return the correct result!');
    });
    it('with an negative index value, should return incorrect index',function () {
        expect(lookupChar('ivan',-5)).to.equal('Incorrect index',
            'Function did not return the correct result!');
    });
    it('with index value equal to length of string, should return incorrect index',function () {
        expect(lookupChar('ivan',4)).to.equal('Incorrect index',
            'Function did not return the correct result!');
    });
    it('with correct parameters, should return incorrect index',function () {
        expect(lookupChar('pesho',0)).to.equal('p',
            'Function did not return the correct result!');
    });
    it('with correct parameters, should return incorrect index',function () {
        expect(lookupChar('Stamat',3)).to.equal('m',
            'Function did not return the correct result!');
    });
    
});
