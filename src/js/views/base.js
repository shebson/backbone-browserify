var Backbone = require('backbone'),
    $ = require('jquery');

module.exports = Backbone.View.extend({
    renderContent: function (content) {
        "use strict";
        this.$el.html(content);
        $(this.container).html(this.$el);
    }
});