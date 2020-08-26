"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.http = void 0;
var fetch = require('node-fetch');
var Http = (function () {
    function Http() {
    }
    Http.prototype.make = function (url, headers, body) {
        var _this = this;
        return new Promise(function () {
            fetch(url, _this.getOptions('post', headers, body));
        });
    };
    Http.prototype.getOptions = function (method, headers, body) {
        var options = {
            headers: JSON.parse(headers),
            method: method
        };
        options.body = JSON.stringify(body);
        options.headers['content-type'] = 'application/json';
        return options;
    };
    return Http;
}());
exports.http = new Http();
//# sourceMappingURL=http.js.map