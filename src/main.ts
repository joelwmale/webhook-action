import * as core from '@actions/core';
import { http } from './http';

async function run() {
  try {
    const url = core.getInput('url');
    const headers = core.getInput('headers') ?? '';
    const body = core.getInput('body') ?? '';

    // initial info
    core.info(`Sending webhook request to ${url}...`);

    // debug start
    core.debug((new Date()).toTimeString()); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true

    // make the request
    http.make(url, headers, body)
      .then((res) => core.setOutput('statusCode', res.status));

    // debug end
    core.info((new Date()).toTimeString());
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();