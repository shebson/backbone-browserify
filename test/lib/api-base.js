/*global describe: false, it: false */
var api = require('../../src/js/lib/api-base'),
    chai = require('chai'),
    expect = chai.expect;

describe("apiBase", function () {
    "use strict";
    var localApiBase = "http://localhost:8080/",
        productionApiBase = "https://api.example.com/";
    describe("getFromHostname", function () {
        it("returns the local API base when provided localhost", function () {
            var apiBase = api.getFromHostname("localhost");
            expect(apiBase).to.equal(localApiBase);
        });
        it("returns the production API base as a default", function () {
            var apiBase = api.getFromHostname("example.com");
            expect(apiBase).to.equal(productionApiBase);
        });
    });
    describe("get", function () {
        it("returns the local API base because tests run locally", function () {
            var apiBase = api.get();
            expect(apiBase).to.equal(localApiBase);
        });
    });
});