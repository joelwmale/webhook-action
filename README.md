# 🚀 Webhook Action

[![GitHub Release][ico-release]][link-github-release]
[![License][ico-license]](LICENSE)

A Github Action for sending a webhook event any endpoint

Supports all [workflow event types](https://developer.github.com/webhooks/#events)

<hr/>

## Usage

Example:

```yml
- name: Webhook
  uses: joelwmale/webhook-action@master
  with:
    url: ${{ secrets.WEBHOOK_URL }}
    headers: '{"repository": "joelwmale/webhook-action"}'
    body: '{"event": "deployment", "repository": "joelwmale/webhook-action"}'
    github_event_payload: true
```

It is **highly** recommended to use the action is an explicit commit SHA-1:

`uses = "joelwmale/webhook-action@{SHA-1}"` to find a commit click [here.](https://github.com/joelwmale/webhook-action/commits/master)

## Action Input

The action has support for the following input variables (arguments):

* **`url`** (**required**): The url to send the webhook to
* **`headers`** (**optional**): Any headers you want to be sent with the webhook
* **`body`** (**optional**): The body of data send with the webhook
* **`insecure`** (**optional**): Enables calling to known self-signed or invalid SSL certificates
* **`github_event_payload`** (**optional**): Enables forwarding the Github event payload to your webhook.

You can find more information on how to use these input variables below.

## Arguments

#### URL

**Required:** true

The URL to send the webhook to

```yml 
  url: ${{ secrets.WEBHOOK_URL }}
```

or

```yml 
  url: https://webhook.site/8b1b1b1b-8b1b-8b1b-8b1b-8b1b1b1b1b1b
```

#### Headers

**Required:** false

Allows you to send custom headers with the request

```yml 
  headers: '{"repository": "joelwmale/webhook-action"}'
```

#### Body

**Required:** false
**Must be a stringified JSON payload**

Allows you to send a custom JSON object to the webhook

```yml 
  body: '{"event": "deployment", "repository": "joelwmale/webhook-action"}'
```

#### Insecure

**Required:** false
**Default:** false

Allows you to send a webhook to a known self-signed or invalid SSL certificate

```yml 
  insecure: true
```

#### Github Event Payload

**Required:** false
**Default:** false

Allows you to send the Github event payload to your webhook

The payload will be sent as a JSON object under the key `githubEventPayload` on the root of the payload sent to your webhook

```yml 
  github_event_payload: true
```

## Issues

If you find any issues or have an improvement feel free to [submit an issue](https://github.com/joelwmale/webhook-action/issues/new)

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.

[ico-release]: https://img.shields.io/github/tag/joelwmale/webhook-action.svg
[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg
[link-github-release]: https://github.com/joelwmale/webhook-action/releases