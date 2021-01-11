import * as core from '@actions/core';
import { http } from './http';

async function run() {
    const url = core.getInput('url') ? core.getInput('url') : (process.env.WEBHOOK_URL ? process.env.WEBHOOK_URL : '');
    const headers = core.getInput('headers') ? core.getInput('headers') : (process.env.headers ? process.env.headers : null);
    const body = core.getInput('body') ? core.getInput('body') : (process.env.data ? process.env.data : null);
    const insecureStr = core.getInput('insecure') ? core.getInput('insecure') : (process.env.data ? process.env.data : false);
    const insecure = insecureStr == 'true';

    if (!url) {
      // validate a url
      core.setFailed('A url is required to run this action.');
      // error
      throw new Error('A url is required to run this action.');
    }

    // initial info
    core.info(`Sending webhook request to ${url}`);

    // debug start
    core.debug((new Date()).toTimeString()); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true

    // make the request
    http.make(url, headers, body, insecure)
      .then((res) => {
        // if the status code is not 2xx
        if (res.status >= 400) {
          // throw an error
          error(res.status);
        }

        // output the status
        core.setOutput('statusCode', res.status);
        // report on the status code
        core.info(`Received status code: ${res.status}`);
        // debug end
        core.info((new Date()).toTimeString());
      })
      .catch((err) => {
        error(err.status);
      });
}

function error(statusCode) {
  // set the action to failed
  core.setFailed(`Received status code: ${statusCode}`);
  // throw an error
  throw new Error(`Request failed with status code: ${statusCode}`);
}

run();
