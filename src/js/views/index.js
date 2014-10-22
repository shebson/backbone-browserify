var Backbone = require('backbone'),
    template = require('../templates/index.hbs'),
    $ = require('jquery');

module.exports = Backbone.View.extend ({
    el: '#content',
    render: function () {
        this.$el.html(template());
    }
});