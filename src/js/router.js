var Backbone = require('backbone'),
    Index = require('./views/index');

var Router = Backbone.Router.extend({
    routes: {
        "*actions" : "index"
    },
    index: function () {
        "use strict";
        var indexView = new Index();
        indexView.render();
    }
});

module.exports = Router;