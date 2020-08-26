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
```

It is **highly** recommended to use the action is an explicit commit SHA-1:

`uses = "joelwmale/webhook-action@{SHA-1}"` to find a commit click [here.](https://github.com/joelwmale/webhook-action/commits/master)

## Action Input

The action has support for the following input variables (arguments):

* **`url`** (**required**): The url to send the webhook to
* **`headers`** (**optional**): Any headers you want to be sent with the webhook
* **`body`** (**optional**): The body of data send with the webhook

You can find more information on how to use these input variables below.

## Arguments

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

## Issues

If you find any issues or have an improvement feel free to [submit an issue](https://github.com/joelwmale/webhook-action/issues/new)

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.

[ico-release]: https://img.shields.io/github/tag/joelwmale/webhook-action.svg
[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg
[link-github-release]: https://github.com/joelwmale/webhook-action/releases