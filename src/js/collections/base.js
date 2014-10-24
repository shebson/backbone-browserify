var Backbone = require('backbone'),
    api = require('../lib/api-base');

module.exports = Backbone.Collection.extend({
    apiBase: api.get()
});