module.exports = {
    get: function () {
        "use strict";
        return this.getFromHostname(window.location.hostname);
    },
    getFromHostname: function (hostname) {
        "use strict";
        switch (hostname) {
        case 'localhost':
            return 'http://localhost:8080/'; // Set to local API port
        default:
            return 'https://api.example.com/'; // Set to production API
        }
    }
};


