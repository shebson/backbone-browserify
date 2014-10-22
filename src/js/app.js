var Router = require('./router'),
    Backbone = require('backbone'),
    $ = require('jquery');

var app = {
    init: function () {
        Backbone.$ = $;
        this.router = new Router();
        $(document).ready(function () {
            Backbone.history.start();
        });
    }
}

module.exports = app;
app.init();