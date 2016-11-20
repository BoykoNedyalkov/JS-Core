let isSymmetric = require("../check-for-symmetry.js").isSymmetric;
let expect = require("C:\\Users\\Boyko\\AppData\\Roaming\\npm\\node_modules\\chai").expect;

describe("Test isSymemetric(arr)",function () {
    it("should return true for[1,2,3,3,2,1]",function () {
        let symmetric = isSymmetric([1,2,3,3,2,1]);
        expect(symmetric).to.be.equal(true)

    });
    it("should return false for[1,2,3,4,2,1]",function () {
        let symmetric = isSymmetric([1,2,3,4,2,1]);
        expect(symmetric).to.be.equal(false)

    });
    it("should return true for[5,'hi',{a:5},new Date(),{a:5},'hi',5] ",function () {
        let symmetric = isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5] );
        expect(symmetric).to.be.equal(true)

    });
    it("should return false for 1,2,2,1",function () {
        let symmetric = isSymmetric(1,2,2,1);
        expect(symmetric).to.be.equal(false)

    });
    it("should return false for [1,2,-1]",function () {
        let symmetric = isSymmetric([1,2,-1]);
        expect(symmetric).to.be.equal(false)

    });

});