let createList = require("../Problem-2-Add-Swap").createList;
let expect = require("C:\\Users\\Boyko\\AppData\\Roaming\\npm\\node_modules\\chai").expect;
let should = require("C:\\Users\\Boyko\\AppData\\Roaming\\npm\\node_modules\\chai").should;
let assert = require("C:\\Users\\Boyko\\AppData\\Roaming\\npm\\node_modules\\chai").assert;

describe(`createList`,function () {

    it(`has an an add funciton`,function () {
        expect(createList().hasOwnProperty('add')).to.equal(true,`does not have an add property`)
    })
    it(`has a shiftLeft funciton`,function () {
        expect(createList().hasOwnProperty('shiftLeft')).to.equal(true,`does not have an add shiftLeft`)
    })
    it(`has a shiftRight funciton`,function () {
        expect(createList().hasOwnProperty('shiftRight')).to.equal(true,`does not have a shiftRight property`)
    })
    it(`has a swap funciton`,function () {
        expect(createList().hasOwnProperty('swap')).to.equal(true,`does not have a swap property`)
    })
    it(`has a toString funciton`,function () {
        expect(createList().hasOwnProperty('toString')).to.equal(true,`does not have a toString property`)
    })
    describe('add',function () {
        it('when a single variable is passed',function () {
            let f = createList()
            f.add(8);
            expect(f.toString()).to.equal('8','did not add item')
        })
        it('when multiple variables are passed',function () {
            let f = createList()
            f.add(8);
            f.add(8);
            f.add(3);
            f.add(2);
            expect(f.toString()).to.equal('8, 8, 3, 2','did not add item')
        })
    })
    describe('shiftLeft',function () {
        it('when a no variable is passed',function () {
            let f = createList()
            //f.add(8);
            f.shiftLeft()
            expect(f.toString()).to.equal('','did not add item')
        })
        it('when a single variable is passed',function () {
            let f = createList()
            f.add(8);
            f.shiftLeft()
            expect(f.toString()).to.equal('8','did not add item')
        })
        it('when a two variables are passed',function () {
            let f = createList()
            f.add(1);
            f.add(2);
            f.shiftLeft()
            expect(f.toString()).to.equal('2, 1','did not add item')
        })
        it('when multiple variables are passed',function () {
            let f = createList()
            f.add(1);
            f.add(3);
            f.add(2);
            f.add(4);
            f.shiftLeft()
            f.shiftLeft()
            expect(f.toString()).to.equal('2, 4, 1, 3','did not add item')
        })
    })
    describe('shiftRight',function () {
        it('when a no variable is passed',function () {
            let f = createList()
            //f.add(8);
            f.shiftRight()
            expect(f.toString()).to.equal('','did not add item')
        })
        it('when a single variable is passed',function () {
            let f = createList()
            f.add(8);
            f.shiftRight()
            expect(f.toString()).to.equal('8','did not add item')
        })
        it('when a two variables are passed',function () {
            let f = createList()
            f.add(22);
            f.add(2);
            f.shiftRight()
            expect(f.toString()).to.equal('2, 22','did not add item')
        })
        it('when multiple variables are passed',function () {
            let f = createList()
            f.add(1);
            f.add(11);
            f.add(12);
            f.add(13);
            f.shiftLeft()
            f.shiftLeft()
            expect(f.toString()).to.equal('12, 13, 1, 11','did not add item')
        })
    })
    describe('swap',function () {
        it('when an invalid index is passed',function () {
            let f = createList()
            f.add(1);
            f.add(2);
            expect(f.swap(-1,1)).to.equal(false)
            expect(f.toString()).to.equal('1, 2')
        })
        it('HUUUUUUUUUUUUI',function () {
            let f = createList()
            f.add(1);
            f.add(2);
            expect(f.swap(-1,1)).to.equal(false)


            expect(f.swap(0.1,1)).to.equal(false)
            expect(f.swap('0',1)).to.equal(false)
            expect(f.swap('Ivan',1)).to.equal(false)
            expect(f.swap(1,-1)).to.equal(false)
            expect(f.swap(1,0.1)).to.equal(false)
            expect(f.swap(1,"0")).to.equal(false)
            expect(f.swap(1,'Ivan')).to.equal(false)
            expect(f.swap('0',0)).to.equal(false)
            expect(f.swap(0,'0')).to.equal(false)
            expect(f.swap(0,0)).to.equal(false)
            expect(f.swap(NaN,0)).to.equal(false)
            expect(f.swap(1,NaN)).to.equal(false)
            expect(f.swap(undefined,0)).to.equal(false)
            expect(f.swap(1,undefined)).to.equal(false)
            expect(f.swap(0,2)).to.equal(false)
            expect(f.swap(1,0)).to.equal(true)
            expect(f.swap({1:1},0)).to.equal(false)
            expect(f.swap(0,{1:1})).to.equal(false)
            expect(f.swap('',0)).to.equal(false)
            expect(f.swap(0,'')).to.equal(false)
            expect(f.swap(true,0)).to.equal(false)
            expect(f.swap(0,true)).to.equal(false)
            expect(f.swap(false,0)).to.equal(false)
            expect(f.swap(0,false)).to.equal(false)

            expect(f.swap(1,5)).to.equal(false)
            expect(f.swap(5,1)).to.equal(false)
            expect(f.swap(4-1,0)).equal(false)
             expect(f.toString()).to.equal('1, 2')
          //   expect(f.swap(1,0,0)).to.equal(true)
          //   expect(f.swap(1,0,1)).to.equal(true)
             expect(f.swap(5,1)).to.equal(false)
             expect(f.toString()).to.equal('1, 2')



        })
        it('when an invalid index is passed',function () {
            let f = createList()
            f.add(1);
            f.add(2);
            expect(f.swap('Ivan',1)).to.equal(false)
            expect(f.toString()).to.equal('1, 2')
        })
        it('when an invalid index is passed',function () {
            let f = createList()
            f.add(1);
            f.add(2);
            expect(f.swap(0.1,1)).to.equal(false)
            expect(f.toString()).to.equal('1, 2')
        })
        it('when an invalid index is passed',function () {
            let f = createList()
            f.add(1);
            f.add(2);
            expect(f.swap(2,1)).to.equal(false)
            expect(f.toString()).to.equal('1, 2')
        })
        it('when an invalid index is passed',function () {
            let f = createList()
            f.add(1);
            f.add(2);
            expect(f.swap(0,-1)).to.equal(false)
            expect(f.toString()).to.equal('1, 2')
        })
        it('when an invalid index is passed',function () {
            let f = createList()
            f.add(1);
            f.add(2);
            expect(f.swap(0,'Ivan')).to.equal(false)
            expect(f.toHString()).to.equal('1, 2')
        })
        it('when an invalid index is passed',function () {
            let f = createList()
            f.add(1);
            f.add(2);
            expect(f.swap(0,0.1)).to.equal(false)
            expect(f.toString()).to.equal('1, 2')
        })
        it('when an invalid index is passed',function () {
            let f = createList()
            f.add(1);
            f.add(2);
            expect(f.swap(0,2)).to.equal(false)
            expect(f.toString()).to.equal('1, 2')
        })
        it('when an invalid index is passed',function () {
            let f = createList()
            f.add(1);
            f.add(2);
            expect(f.swap(0,0)).to.equal(false)
            expect(f.toString()).to.equal('1, 2')
        })
        it('when a no variable is passed',function () {
            let f = createList()
            //f.add(8);
            //f.swap(0,1)
            expect(f.swap(0,1)).to.equal(false,'did not add item')
            expect(f.toString()).to.equal('','did not add item')
        })
        it('when a single index is passed',function () {
            let f = createList()
            f.add(8);
            f.add(5);

            expect(f.swap(1)).to.equal(false,'did not add item')
            expect(f.toString()).to.equal('8, 5','did not add item')
        })
        it('when a no single variable is passed',function () {
            let f = createList()
            f.add(8);
            //f.swap(0,1)
            expect(f.swap(0,1)).to.equal(false,'did not add item')
            expect(f.toString()).to.equal('8','did not add item')
        })
        it('when a no variable is passed',function () {
            let f = createList()
            f.add(11);
            f.add(22);

            //f.swap(0,1)
            expect(f.swap(0,0.9)).to.equal(false,'did not add item')
            expect(f.toString()).to.equal('11, 22','did not add item')
        })
        it('when a no variable is passed',function () {
            let f = createList()
            f.add(11);
            f.add(22);

            //f.swap(0,1)
            expect(f.swap(0,0.99999)).to.equal(false,'did not add item')
            expect(f.toString()).to.equal('11, 22','did not add item')
        })
        it('when a no variable is passed',function () {
            let f = createList()
            f.add(11);
            f.add(22);
            f.add(15);

            //f.swap(0,1)
            expect(f.swap(0.999999,2)).to.equal(false,'did not add item')
            expect(f.toString()).to.equal('11, 22, 15','did not add item')
        })
        it('when a no variable is passed',function () {
            let f = createList()
            f.add(11);
            f.add(22);

            //f.swap(0,1)
            expect(f.swap(0.5,1)).to.equal(false,'did not add item')
            expect(f.toString()).to.equal('11, 22','did not add item')
        })
        it('when a no variable is passed',function () {
            let f = createList()
            f.add(11);
            f.add(22);

            //f.swap(0,1)
            expect(f.swap('Ivan',1)).to.equal(false,'did not add item')
            expect(f.toString()).to.equal('11, 22','did not add item')
        })
        it('when a no variable is passed',function () {
            let f = createList()
            f.add(11);
            f.add(22);

            //f.swap(0,1)
            expect(f.swap(0,'Pesho')).to.equal(false,'did not add item')
            expect(f.toString()).to.equal('11, 22','did not add item')
        })
        it('when a no variable is passed',function () {
            let f = createList()
            f.add(11);
            f.add(22);

            //f.swap(0,1)
            expect(f.swap(0,-1)).to.equal(false,'did not add item')
            expect(f.toString()).to.equal('11, 22','did not add item')
        })
        it('when a no variable is passed',function () {
            let f = createList()
            f.add(11);
            f.add(22);

            //f.swap(0,1)
            expect(f.swap(-1,0)).to.equal(false,'did not add item')
            expect(f.toString()).to.equal('11, 22','did not add item')
        })
        it('when a no variable is passed',function () {
            let f = createList()
            f.add(11);
            f.add(22);

            //f.swap(0,1)
            expect(f.swap('1',0)).to.equal(false,'did not add item')
            expect(f.toString()).to.equal('11, 22','did not add item')
        })
        it('when a no variable is passed',function () {
            let f = createList()
            f.add(11);
            f.add(22);

            //f.swap(0,1)
            expect(f.swap(0,'1')).to.equal(false,'did not add item')
            expect(f.toString()).to.equal('11, 22','did not add item')
        })
        it('when multiple variables are passed',function () {
            let f = createList()
            f.add(1);
            f.add(2);
            f.add(3);
            f.add(4);
            expect(f.swap(0,4)).to.equal(false,'did not add item')
            expect(f.toString()).to.equal('1, 2, 3, 4','did not add item')
        })
        it('when multiple variables are passed',function () {
            let f = createList()
            f.add(1);
            f.add(2);
            f.add(3);
            f.add(4);
            expect(f.swap(4,1)).to.equal(false,'did not add item')
            expect(f.toString()).to.equal('1, 2, 3, 4','did not add item')
        })
        it('when multiple variables are passed',function () {
            let f = createList()
            f.add(1);
            f.add(2);
            f.add(3);
            f.add(4);
            expect(f.swap(4,0)).to.equal(false,'did not add item')
            expect(f.toString()).to.equal('1, 2, 3, 4','did not add item')
        })
        it('when multiple variables are passed',function () {
            let f = createList()
            f.add(1);
            f.add(2);
            f.add(3);
            f.add(4);
            expect(f.swap(4,4)).to.equal(false,'did not add item')
            expect(f.toString()).to.equal('1, 2, 3, 4','did not add item')
        })
        it('when multiple variables are passed',function () {
            let f = createList()
            f.add(1);
            f.add(2);
            f.add(3);
            f.add(4);
            expect(f.swap(4,'4')).to.equal(false,'did not add item')
            expect(f.toString()).to.equal('1, 2, 3, 4','did not add item')
        })
        it('when multiple variables are passed',function () {
            let f = createList()
            f.add(1);
            f.add(2);
            f.add(3);
            f.add(4);
            expect(f.swap(5,0)).to.equal(false,'did not add item')
            expect(f.toString()).to.equal('1, 2, 3, 4','did not add item')
        })
        it('when multiple variables are passed',function () {
            let f = createList()
            f.add(1);
            f.add(2);
            f.add(3);
            f.add(4);
            expect(f.swap(4,0)).to.equal(false,'did not add item')
            expect(f.toString()).to.equal('1, 2, 3, 4','did not add item')
        })
        it('when multiple variables are passed',function () {
            let f = createList()
            f.add(5);
            f.add(6);
            f.add(7);
            f.add(8);
            expect(f.swap(0,1)).to.equal(true,'did not add item')
            expect(f.toString()).to.equal('6, 5, 7, 8','did not add item')
        })
        it('when multiple variables are passed',function () {
            let f = createList()
            f.add(5);
            f.add(6);
            f.add(7);
            f.add(8);
            expect(f.swap(1,0)).to.equal(true,'did not add item')
            expect(f.toString()).to.equal('6, 5, 7, 8','did not add item')
        })
        it('when multiple variables are passed',function () {
            let f = createList()
            f.add(1);
            f.add('I');
            f.add('P');
            f.add(4);
            expect(f.swap(0,3)).to.equal(true,'did not add item')
            expect(f.toString()).to.equal('4, I, P, 1','did not add item')
        })
        it('when multiple variables are passed',function () {
            let f = createList()
            f.add(1);
            f.add(2);
            f.add(3);
            f.add(4);
            expect(f.swap(1,2)).to.equal(true,'did not add item')
            expect(f.toString()).to.equal('1, 3, 2, 4','did not add item')
        })
    })
    

});
