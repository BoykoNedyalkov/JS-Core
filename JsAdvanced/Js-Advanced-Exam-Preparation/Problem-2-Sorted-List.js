let SortedList = require("./Problem-2-Code.js").SortedList;
let expect = require("C:\\Users\\Boyko\\AppData\\Roaming\\npm\\node_modules\\chai").expect;
let should = require("C:\\Users\\Boyko\\AppData\\Roaming\\npm\\node_modules\\chai").should;
let assert = require("C:\\Users\\Boyko\\AppData\\Roaming\\npm\\node_modules\\chai").assert;

describe(`SortedList`,function () {
    let list;
    beforeEach(function () {
        list = new SortedList()
    })
    it(`should have be a funciton`,function () {
        expect(typeof SortedList).to.equal('function')
    })
    it(`should have be a funciton`,function () {
        expect(list.size).to.equal(0)
    })
    it(`should have constructor`,function () {
        expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true)
        expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true)
        expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true)
        expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true)
    })
    describe(`constructor`,function () {
        it(`when the collection is of type Array`,function () {
            expect(list.list.length).to.be.empty;
        })

    })
    describe(`add`,function () {
        it(`when the collection exists`,function () {
            expect(list.add).to.exist;
        });
        it(`when consecutive elements are added exists`,function () {
            list.list=[];
            list.add(5);
            list.add(123);
            list.add(12);
            expect(list.get(0)).to.equal(5)
            expect(list.get(1)).to.equal(12)
            expect(list.get(2)).to.equal(123)
        });

    })
    describe(`remove`,function () {
        it(`when the collection exists`,function () {
            expect(list.remove).to.exist;
        });
        it(`when end elements is removed`,function () {
            list.list=[6,2,12];
            list.remove(2)
            expect(list.list.length).to.equal(2)
        });
        it(`when middle element is removed`,function () {
            list.list=[6,1,5];
            list.remove(0)
            expect(list.get(1)).to.equal(5)
            expect(list.get(0)).to.equal(1)
        });
        it(`when middle element is removed`,function () {
            list.list=[];
            expect(()=> list.remove(0)).to.throw(Error)
        });
        it(`when middle element is removed`,function () {
            list.list=[15,16,66];
            expect(()=> list.remove(-15)).to.throw(Error)
        });
        it(`when middle element is removed`,function () {
            list.list=[15,16,66];
            expect(()=> list.remove(100)).to.throw(Error)
        });
    })
    describe(`get`,function () {
        it(`when the collection exists`,function () {
            expect(list.get).to.exist;
        });
        it(`when end elements is removed`,function () {
            list.list=[6,2,12];

            expect(list.get(2)).to.equal(12)
        });
        it(`when middle element is removed`,function () {
            list.list=[6,15,5];
            list.remove(0)
            expect(list.get(1)).to.equal(5)
        });
        it(`when middle element is removed`,function () {
            list.list=[];
            expect(()=> list.get(0)).to.throw(Error)
        });
        it(`when middle element is removed`,function () {
            list.list=[15,16,66];
            expect(()=> list.get(1555)).to.throw(Error)
        });
        it(`when middle element is removed`,function () {
            list.list=[15,16,66];
            expect(()=> list.get(-66)).to.throw(Error)
        });
    })
});
