let sharedObject = require("../Problem-4-Shared-Object").sharedObject;
let expect = require("C:\\Users\\Boyko\\AppData\\Roaming\\npm\\node_modules\\chai").expect;
let assert = require("C:\\Users\\Boyko\\AppData\\Roaming\\npm\\node_modules\\chai").assert;
let jsdom = require("C:\\Users\\Boyko\\AppData\\Roaming\\npm\\node_modules\\jsdom-global")();
let $ = require('C:\\Users\\Boyko\\AppData\\Roaming\\npm\\node_modules\\jquery');

document.body.innerHTML =
    `<div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
        </div>`;


/*describe('sharedObject',function () {
    it(`that name property starts as null`,function () {
        expect(sharedObject.name).to.equal(null,'Object did not initialize with null')
    });
    it(`that income property starts as null`,function () {
        expect(sharedObject.income).to.equal(null,'Object did not initialize with null')
    });
    describe('changeName',function () {
        it(`with invalid parameters, should not change name property`,function () {
            sharedObject.changeName('');
            expect(sharedObject.name).to.equal(null)
        });
        it(`with invalid parameters, should not change name property`,function () {
            sharedObject.name = 'Pesho';
            sharedObject.changeName('');
            expect(sharedObject.name).to.equal('Pesho')
        });
        it(`with invalid parameters, should not change name property`,function () {
            let nameBox = $('#name');
            nameBox.val('Ivan');
            sharedObject.changeName('');
            expect(nameBox.val()).to.equal('Ivan')
        });
        it(`with valid parameters, should change name property`,function () {
            sharedObject.name = 'Joro';
            expect(sharedObject.name).to.equal('Joro')
        });
        it(`with valid parameters, should change name property`,function () {
            sharedObject.changeName('Stamat');
            let nameBox = $('#name');
            expect(nameBox.val()).to.equal('Stamat')
        })
    });
    describe('changeIncome',function () {
        it(`with invalid parameters, should not change name property`, function () {
            sharedObject.income = 130;
            sharedObject.changeIncome({name: "pesho"});
            expect(sharedObject.income).to.equal(130)
        });
        it(`with invalid parameters, should not change name property`, function () {
            sharedObject.income = 13;
            sharedObject.changeIncome(245.45);
            expect(sharedObject.income).to.equal(13)
        });
        it(`with invalid parameters, should not change name property`, function () {
            sharedObject.income = 13;
            sharedObject.changeIncome(-10);
            expect(sharedObject.income).to.equal(13)
        });
        it(`with invalid parameters, should not change name property`, function () {
            sharedObject.income = 13;
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.equal(13)
        });
        it(`with invalid parameters, should not change name property`, function () {
            let incomeBox = $('#income')
            incomeBox.val('5');
            sharedObject.changeIncome({name:'pesho'})
            expect(incomeBox.val()).to.equal('5')
        });
        it(`with invalid parameters, should not change name property`, function () {
            let incomeBox = $('#income')
            incomeBox.val('5');
            sharedObject.changeIncome(24.55)
            expect(incomeBox.val()).to.equal('5')
        });
        it(`with invalid parameters, should not change name property`, function () {
            let incomeBox = $('#income')
            incomeBox.val('5');
            sharedObject.changeIncome(-15)
            expect(incomeBox.val()).to.equal('5')
        });
        it(`with invalid parameters, should not change name property`, function () {
            let incomeBox = $('#income');
            incomeBox.val('5');
            sharedObject.changeIncome(0);
            expect(incomeBox.val()).to.equal('5')
        });
        it(`with invalid parameters, should not change name property`, function () {
            sharedObject.changeIncome(56);
            let incomeBox =$('#income')
            expect(incomeBox.val()).to.equal('56')
        });
        it(`with invalid parameters, should not change name property`, function () {
            sharedObject.changeIncome(56);
            expect(sharedObject.income).to.equal(56)
        });
        it(`with invalid parameters, should not change name property`, function () {
            sharedObject.income = 13;
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.equal(13)
        });
    });
    describe('updateName',function () {
        it(`with invalid parameters, should not change name property`,function () {
            sharedObject.name ='test';
            let nameBox = $('#name');
            nameBox.val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('test')
        });
        it(`with valid parameters, should not change name property`,function () {
            let nameBox = $('#name');
            nameBox.val('testing');
            sharedObject.updateName();
            expect(sharedObject.name).to.equal('testing')
        });
    })
    describe(`updateIncome`,function () {
        it('with string income, should not change income property',function () {
            sharedObject.income = 55;
            let incomeTextBox = $('#income');
            incomeTextBox.val('pesho');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(55,'Income was not changed correctly')
        });
        it('with zero income, should not change income property',function () {
            sharedObject.income = 66;
            let incomeTextBox = $('#income');
            incomeTextBox.val('0');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(66,'Income was not changed correctly')
        });
        it('with floating point string, should not change income property',function () {
            sharedObject.income = 11;
            let incomeTextBox = $('#income');
            incomeTextBox.val('0.55');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(11,'Income was not changed correctly')
        });
        it('with negative string, should not change income property',function () {
            sharedObject.income = 20;
            let incomeTextBox = $('#income');
            incomeTextBox.val('-99');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(20,'Income was not changed correctly')
        });
        it('with negative string, should not change income property',function () {
            sharedObject.income = 299;
            let incomeTextBox = $('#income');
            incomeTextBox.val('-99.99');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(299,'Income was not changed correctly')
        });
        it('with empty string, should not change income property',function () {
            sharedObject.income = 233;
            let incomeTextBox = $('#income');
            incomeTextBox.val('');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(233,'Income was not changed correctly')
        });
        it('with a valid string, should change income property',function () {
            let incomeTextBox = $('#income');
            incomeTextBox.val('100');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.equal(100,'Income was not changed correctly')
        })
    })
});
    */