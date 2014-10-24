/*global window */

var Backbone = require('backbone'),
    getApiBase = require('../lib/get-api-base');

module.exports = Backbone.Model.extend({
    getApiBase: getApiBase
});