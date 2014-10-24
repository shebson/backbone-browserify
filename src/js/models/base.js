var Backbone = require('backbone'),
    api = require('../lib/api-base');

module.exports = Backbone.Model.extend({
    apiBase: api.get()
});