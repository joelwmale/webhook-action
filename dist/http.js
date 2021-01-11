"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.http = void 0;
var fetch = require('node-fetch');
var https = require('https');
var Http = (function () {
    function Http() {
    }
    Http.prototype.make = function (url, headers, body, insecure) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fetch(url, _this.getOptions('post', headers, body, insecure))
                .then(function (res) { return resolve(res); });
        });
    };
    Http.prototype.getOptions = function (method, headers, body, insecure) {
        var options = {
            headers: headers ? JSON.parse(headers) : {},
            method: method
        };
        if (body) {
            options.body = body;
        }
        if (insecure) {
            options.agent = new https.Agent({ rejectUnauthorized: false });
        }
        options.headers['content-type'] = 'application/json';
        return options;
    };
    return Http;
}());
exports.http = new Http();
//# sourceMappingURL=http.js.map