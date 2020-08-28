import * as core from '@actions/core';
import { http } from './http';

async function run() {
    const url = core.getInput('url') ? core.getInput('url') : (process.env.WEBHOOK_URL ? process.env.WEBHOOK_URL : '');
    const headers = core.getInput('headers') ? core.getInput('headers') : (process.env.headers ? process.env.headers : null);
    const body = core.getInput('body') ? core.getInput('body') : (process.env.data ? process.env.data : null);

    if (!url) {
      // validate a url
      core.setFailed('A url is required to run this action.');
      return;
    }

    // initial info
    core.info(`Sending webhook request to ${url}`);

    // debug start
    core.debug((new Date()).toTimeString()); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true

    // make the request
    http.make(url, headers, body)
      .then((res) => {
        // output the status
        core.setOutput('statusCode', res.status);
        // throw error on error status codes
        if (res.status >= 400)
            throw new Error(`Failing with code: ${res.status}`)
        // report on the status code
        core.info(`Received status code: ${res.status}`);
        // debug end
        core.info((new Date()).toTimeString());
      })
      .catch((err) => {
        // set the action to failed
        core.setFailed(`Received status code: ${err.status}`);
      });
}

run();
