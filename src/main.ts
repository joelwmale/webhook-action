import * as core from '@actions/core'
import {http} from './http'
import {context} from '@actions/github'

async function run() {
  // if its a post job do nothing
  if (context.job === 'post') {
    return
  }

  const url = core.getInput('url')
    ? core.getInput('url')
    : process.env.WEBHOOK_URL
      ? process.env.WEBHOOK_URL
      : ''

  const headers = core.getInput('headers')
    ? core.getInput('headers')
    : process.env.headers
      ? process.env.headers
      : null

  let body = core.getInput('body')
    ? core.getInput('body')
    : process.env.data
      ? process.env.data
      : null

  const insecure = core.getInput('insecure')
    ? core.getInput('insecure') === 'true'
    : process.env.insecure
      ? process.env.insecure === 'true'
      : false

  const githubEventPayload = core.getInput('github_event_payload') === 'true'

  // if github_event is set to true, append it to the body
  if (githubEventPayload) {
    // decode the body
    const decodedBody = JSON.parse(body || '{}')

    // set the github event
    decodedBody.githubEventPayload = context.payload || {}

    // re-set the body
    body = JSON.stringify(decodedBody)
  }

  if (!url) {
    // validate a url
    core.setFailed('A url is required to run this action.')
    // error
    throw new Error('A url is required to run this action.')
  }

  core.info(`Sending webhook request to ${url}`)

  // make the request
  http
    .make(url, body, headers, insecure)
    .then(res => {
      // if the status code is not 2xx
      if (res.status >= 400) {
        // throw an error
        error(res.status)
        return
      }
    })
    .catch(err => {
      core.info(`Error: ${err}`)
      error(err.status)
      return
    })
}

function error(statusCode) {
  // set the action to failed
  core.setFailed(`Received status code: ${statusCode}`)
  // throw an error
  throw new Error(`Request failed with status code: ${statusCode}`)
}

run()
