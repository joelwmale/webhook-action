"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.http = void 0;
const node_fetch_1 = require("node-fetch");
const https = require("https");
class Http {
    make(url, body, headers = null, ignoreCertificate = false) {
        return new Promise(resolve => {
            (0, node_fetch_1.default)(url, this.getOptions('post', headers, body, ignoreCertificate)).then((res) => resolve(res));
        });
    }
    getOptions(method, headers, body, ignoreCertificate) {
        const options = {
            headers: headers ? JSON.parse(headers) : {},
            method
        };
        if (body) {
            options.body = body;
        }
        if (ignoreCertificate) {
            options.agent = new https.Agent({ rejectUnauthorized: false });
        }
        options.headers['content-type'] = 'application/json';
        return options;
    }
}
exports.http = new Http();
//# sourceMappingURL=http.js.map