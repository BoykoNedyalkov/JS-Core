let nuke = require("../Problem-5-Armagedom").nuke;
let expect = require("C:\\Users\\Boyko\\AppData\\Roaming\\npm\\node_modules\\chai").expect;
let assert = require("C:\\Users\\Boyko\\AppData\\Roaming\\npm\\node_modules\\chai").assert;
let jsdom = require("C:\\Users\\Boyko\\AppData\\Roaming\\npm\\node_modules\\jsdom-global")();
let $ = require('C:\\Users\\Boyko\\AppData\\Roaming\\npm\\node_modules\\jquery');

describe(`nuke`,function () {
    beforeEach(function () {
        document.body.innerHTML =  `<div id="target">
    <div class="nested target">
        <p>This is some text</p>
    </div>
    <div class="target">
        <p>Empty div</p>
    </div>
    <div class="inside">
        <span class="nested">Some more text</span>
        <span class="target">Some more text</span>
    </div>
</div>
`});
    it(`that the document exists`,function () {
        let selector = `#target`;
        let html = $(`#target`).html();
        expect(document.body.innerHTML).to.exist;
    });
    it(`with invalid selectors`,function () {
        let selector = `#target`;
        let unchangedHtml = document.body.innerHTML;
        nuke('p','#target');
        let changedHtml = document.body.innerHTML;
        expect(changedHtml).to.equal(unchangedHtml,'Erased matching selectors')
    });

    it(`with invalid selectors`,function () {
        let unchangedHtml = document.body.innerHTML;
        nuke(``,`#target`);
        let changedHtml = document.body.innerHTML;
        expect(changedHtml).to.equal(unchangedHtml,'Erased matching selectors')
    });
    it(`with invalid selectors`,function () {
        let unchangedHtml = document.body.innerHTML;
        nuke(`#target`,`#target`);
        let changedHtml = document.body.innerHTML;
        expect(changedHtml).to.equal(unchangedHtml,'Erased matching selectors')
    });
    it(`with invalid selectors`,function () {
        let unchangedHtml = document.body.innerHTML;
        nuke(`#target`,`.target`);
        let changedHtml = document.body.innerHTML;
        expect(changedHtml).to.equal(unchangedHtml,'Erased matching selectors')
    });
    it(`with valid selectors`,function () {
        let selector1 = `.target`;
        let selector2 = `.nested`;
        nuke(selector1,selector2);
        let changedLength = $(selector1 + selector2).length;
        expect(changedLength).to.equal(0,'Did not erase matching selectors')
    });

});