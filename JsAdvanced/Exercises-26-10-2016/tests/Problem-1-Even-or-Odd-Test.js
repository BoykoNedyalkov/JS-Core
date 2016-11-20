let isOddOrEven = require("../Problem-1-Even-or-Odd").isOddOrEven;
let expect = require("C:\\Users\\Boyko\\AppData\\Roaming\\npm\\node_modules\\chai").expect;
let jsdom = require("C:\\Users\\Boyko\\AppData\\Roaming\\npm\\node_modules\\jsdom-global")();
let $ = require('C:\\Users\\Boyko\\AppData\\Roaming\\npm\\node_modules\\jquery');

describe('isOddOrEven',function () {
    it('with a number, should return undefined',function () {
        expect(isOddOrEven(13)).to.equal(undefined,
            'Function did not return the correct result!');
    });
    it('with an object parameter, should return undefined',function () {
        expect(isOddOrEven({name:'Pesho'})).to.equal(undefined,
            'Function did not return the correct result!');
    });
    it('with an even length string, should return correct result',function () {
        expect(isOddOrEven('roar')).to.equal('even',
            'Function did not return the correct result!');
    });
    it('with an odd length string, should return correct result',function () {
        expect(isOddOrEven('ivane')).to.equal('odd',
            'Function did not return the correct result!');
    });
    it('with multiple consecutive checks, should return correct results',function () {
        expect(isOddOrEven('cat')).to.equal('odd',
            'Function did not return the correct result!');
        expect(isOddOrEven('alabala')).to.equal('odd',
            'Function did not return the correct result!');
        expect(isOddOrEven('is it even')).to.equal('even',
            'Function did not return the correct result!');
    });
});