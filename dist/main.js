"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@actions/core");
const http_1 = require("./http");
const github_1 = require("@actions/github");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = core.getInput('url')
            ? core.getInput('url')
            : process.env.WEBHOOK_URL
                ? process.env.WEBHOOK_URL
                : '';
        const headers = core.getInput('headers')
            ? core.getInput('headers')
            : process.env.headers
                ? process.env.headers
                : null;
        let body = core.getInput('body')
            ? core.getInput('body')
            : process.env.data
                ? process.env.data
                : null;
        const insecure = core.getInput('insecure')
            ? core.getInput('insecure') == 'true'
            : process.env.insecure
                ? process.env.insecure == 'true'
                : false;
        if (process.env.github_event && body) {
            const decodedBody = JSON.parse(body);
            decodedBody.github_event = github_1.context;
            body = JSON.stringify(decodedBody);
        }
        if (!url) {
            core.setFailed('A url is required to run this action.');
            throw new Error('A url is required to run this action.');
        }
        core.info(`Sending webhook request to ${url}`);
        http_1.http
            .make(url, body, headers, insecure)
            .then(res => {
            if (res.status >= 400) {
                error(res.status);
                return;
            }
        })
            .catch(err => {
            core.info(`Error: ${err}`);
            error(err.status);
            return;
        });
    });
}
function error(statusCode) {
    core.setFailed(`Received status code: ${statusCode}`);
    throw new Error(`Request failed with status code: ${statusCode}`);
}
run();
//# sourceMappingURL=main.js.map