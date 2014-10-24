/*global describe: false, it: false */
var BaseModel = require('../../src/js/models/base'),
    chai = require('chai'),
    expect = chai.expect;

describe("Base Model", function () {
    "use strict";
    var localApiBase = "http://localhost:8080/";
    describe("apiBase", function () {
        it("is the local API base because tests run locally", function () {
            var model = new BaseModel();
            expect(model.apiBase).to.equal(localApiBase);
        });
    });
});