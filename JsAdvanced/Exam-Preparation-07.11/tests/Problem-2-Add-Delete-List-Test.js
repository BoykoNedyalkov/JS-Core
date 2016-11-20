let list = require("../Problem-2-Add-Delete-List").list;
let expect = require("C:\\Users\\Boyko\\AppData\\Roaming\\npm\\node_modules\\chai").expect;
let should = require("C:\\Users\\Boyko\\AppData\\Roaming\\npm\\node_modules\\chai").should;
let assert = require("C:\\Users\\Boyko\\AppData\\Roaming\\npm\\node_modules\\chai").assert;

describe(`list`,function () {

    it('it should have a list',function () {
        expect(list.toString()).to.equal('','did not exist');
    })
    it('it should have a list',function () {
        list.delete(0.66)
        expect(list.toString()).to.equal('','did not return empty list');
    })
    it(`should have a property add`,function () {
        expect(list.hasOwnProperty('add')).to.equal(true,`does not have add property`)
    })
    it(`should have a property delete`,function () {
        expect(list.hasOwnProperty('delete')).to.equal(true,`does not have delete property`)
    })
    it(`should have a toString delete`,function () {
        expect(list.hasOwnProperty('toString')).to.equal(true,`does not have toString property`)
    })
    describe('add',function () {
        it(`when a single variable is passed`,function () {
            list.add('Ivan')
            expect(list.toString()).to.equal(`Ivan`,`did not push the variable correctly`)
        })
        it(`when a multiple variables are passed variable is passed`,function () {
            list.delete(0)
            list.add('Ivan');
            list.add(49849);
            expect(list.toString()).to.equal(`Ivan, 49849`,`did not push the variable correctly`)
        })
    })
    describe(`remove`,function () {
        it(`when not a number is passed`,function () {
            expect(list.delete('Ivan')).to.equal(undefined,`did not return undefined`)
        })

        it(`when not a number is passed`,function () {
            list.delete({index:0})
            expect(list.toString()).to.equal(`Ivan, 49849`,`did not return undefined`)
        })
        it(`when an invalid number is passed`,function () {
            expect(list.delete(9999)).to.equal(undefined,`did not return undefined`)
        })
        it(`when an negadive number is passed`,function () {
            expect(list.delete(-1)).to.equal(undefined,`did not return undefined`)
        })
        it(`when an border number is passed`,function () {
            expect(list.delete(2)).to.equal(undefined,`did not return undefined`)
        })
        it(`when a valid  index is passed`,function () {
            list.add(888);
            list.add(85);
            list.add(899);
            list.delete(4);
            list.delete(3);
            list.delete(2);
            list.delete(1);
            list.delete(0);
            expect(list.toString()).to.equal('',`did not return undefined`)
        })

        it(`when a zero  index is passed`,function () {

            expect(list.delete(0)).to.equal(undefined,`did not return undefined`)
        })
        it(`when a border  index is passed`,function () {
            list.add(1);
            list.add(2);
            list.add(3);
            list.delete(3)
            expect(list.toString()).to.equal('1, 2, 3',`did not return adasd`)
        })
        it(`when an ivalid idex is passed point  index is passed`,function () {
            list.delete(1.0)
            list.delete(0)
            list.delete(0)

            expect(list.delete(0)).to.equal(undefined,`deleted floating point index`)
        })
        it(`when an ivalid idex is passed point  index is passed`,function () {
            list.add(1123)
            list.add(2)
            list.add(3)
            list.add(4)
            list.delete(0.1,1)
            expect(list.toString()).to.equal('1123, 2, 3, 4',`deleted floating point index`)
        })


    })

});
