let mathEnforcer = require("../Problem-3-Math-Enforcer.js").mathEnforcer;
let expect = require("C:\\Users\\Boyko\\AppData\\Roaming\\npm\\node_modules\\chai").expect;
let assert = require("C:\\Users\\Boyko\\AppData\\Roaming\\npm\\node_modules\\chai").assert;
let jsdom = require("C:\\Users\\Boyko\\AppData\\Roaming\\npm\\node_modules\\jsdom-global")();
let $ = require('C:\\Users\\Boyko\\AppData\\Roaming\\npm\\node_modules\\jquery');


describe('mathEnforcer',function () {
    describe('addFive',function () {
        it('with a non-number parameter, should return undefined',function () {
            expect(mathEnforcer.addFive('Ivan')).to.equal(undefined,
                'Function did not return the correct result!');
        });
        it('with a negative parameter, should return correct result',function () {
            expect(mathEnforcer.addFive(-5)).to.equal(0,
                'Function did not return the correct result!');
        });
        it('with a floating-point parameter, should return correct result',function () {
            assert.closeTo(mathEnforcer.addFive(1.999),6.999,Number(0.1),'Function did not return the correct result!')
        });
        it('with an integer parameter, should return correct result',function () {
            expect(mathEnforcer.addFive(5)).to.equal(10,
                'Function did not return the correct result!');
        });
    });
    describe('subtractTen',function () {
        it('with a non-number parameter, should return undefined',function () {
            expect(mathEnforcer.subtractTen('Ivan')).to.equal(undefined,
                'Function did not return the correct result!');
        });
        it('with a negative parameter, should return -20',function () {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20,
                'Function did not return the correct result!');
        });
        it('with a floating-point parameter, should return close to 1',function () {
            assert.closeTo(mathEnforcer.subtractTen(10.999),0.999,Number(0.1),'Function did not return the correct result!')
        });
        it('with an integer parameter, should return 0',function () {
            expect(mathEnforcer.subtractTen(10)).to.equal(0,
                'Function did not return the correct result!');
        });
        it('with a zero parameter, should return -10',function () {
            expect(mathEnforcer.subtractTen(0)).to.equal(-10,
                'Function did not return the correct result!');
        });
    });
    describe('sum',function () {
        it('with a non-number  first parameter, should return undefined',function () {
            expect(mathEnforcer.sum('Ivan',2)).to.equal(undefined,
                'Function did not return the correct result!');
        });
        it('with a non-number second parameter, should return undefined',function () {
            expect(mathEnforcer.sum(13,'Pesho')).to.equal(undefined,
                'Function did not return the correct result!');
        });
        it('with a non-number parameters, should return undefined',function () {
            expect(mathEnforcer.sum('Ivan','Pesho')).to.equal(undefined,
                'Function did not return the correct result!');
        });
        it('with a negative first parameter, should return correct result',function () {
            expect(mathEnforcer.sum(-10,10)).to.equal(0,
                'Function did not return the correct result!');
        });
        it('with a negative second parameter, should return correct result',function () {
            expect(mathEnforcer.sum(10,-10)).to.equal(0,
                'Function did not return the correct result!');
        });
        it('with a floating-point first parameter, should return close to 21',function () {
            assert.closeTo(mathEnforcer.sum(10.999, 10),20.999,Number(0.1),'Function did not return the correct result!')
        });
        it('with a floating-point first parameter, should return close to 21',function () {
            assert.closeTo(mathEnforcer.sum(0, 10.999),10.999,Number(0.1),'Function did not return the correct result!')
        });
        it('with an integer parameter, should return 11',function () {
            expect(mathEnforcer.sum(10,1)).to.equal(11,
                'Function did not return the correct result!');
        });
        it('with a zero first parameter, should return -10',function () {
            expect(mathEnforcer.sum(0,8)).to.equal(8,
                'Function did not return the correct result!');
        });
        it('with a zero second parameter, should return 9',function () {
            expect(mathEnforcer.sum(9,0)).to.equal(9,
                'Function did not return the correct result!');
        });
        it('with a zero first parameter and negative second, should return -9',function () {
            expect(mathEnforcer.sum(0,-9)).to.equal(-9,
                'Function did not return the correct result!');
        });
    });
});