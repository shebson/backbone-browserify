/*global window */

module.exports = function () {
    "use strict";
    switch (window.location.hostname) {
    case 'localhost':
        return 'http://localhost:8080/'; // Set to local API port
    default:
        return 'https://api.example.com/'; // Set to production API
    }
};


