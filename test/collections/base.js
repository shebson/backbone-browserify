/*global describe: false, it: false */
var BaseCollection = require('../../src/js/collections/base'),
    chai = require('chai'),
    expect = chai.expect;

describe("BaseCollection", function () {
    "use strict";
    var localApiBase = "http://localhost:8080/";
    describe("apiBase", function () {
        it("is the local API base because tests run locally", function () {
            var collection = new BaseCollection();
            expect(collection.apiBase).to.equal(localApiBase);
        });
    });
});