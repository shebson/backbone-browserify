var BaseView = require('./base'),
    template = require('../templates/index.hbs');

module.exports = BaseView.extend({
    container: '#content',
    render: function () {
        "use strict";
        this.renderContent(template());
    }
});