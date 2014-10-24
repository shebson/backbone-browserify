/*global window */

var Backbone = require('backbone'),
    getApiBase = require('../lib/get-api-base');

module.exports = Backbone.Collection.extend({
    getApiBase: getApiBase
});