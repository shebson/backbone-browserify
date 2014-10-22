var Backbone = require('backbone'),
    template = require('../templates/index.hbs'),
    $ = require('jquery');

module.exports = Backbone.View.extend({
    el: '#content',
    render: function () {
        "use strict";
        this.$el.html(template());
    }
});