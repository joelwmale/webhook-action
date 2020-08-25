# 🚀 Webhook Action

[![GitHub Release][ico-release]][link-github-release]
[![License][ico-license]](LICENSE)

A Github Action for sending data to an endpoint

Supports all [workflow event types](https://developer.github.com/webhooks/#events)

<hr/>

## Usage

Example:

```yml
- name: Webhook
  uses: joelwmale/webhook-action@master
  with:
    url: ${{ secrets.WEBHOOK_URL }}
    headers: "{Content-Type: 'application/json'}"
    body: "{event: 'Deployment', project: 'joelwmale/webhook-action'}"
```

It is **highly** recommended to use the action is an explicit commit SHA-1:

`uses = "joelwmale/webhook-action@{SHA-1}"` to find a commit click here: https://github.com/joelwmale/webhook-action/commits/master

### Arguments

### Headers

Allows you to send custom headers with the request

```yml 
  headers: "{Repository: 'joelwmale/webhook-action'}"
```

### Body

Allows you to send a json payload in a string format

```yml 
  body: "{event: 'Deployment', project: 'joelwmale/webhook-action'}"
```

### Environment

The action is expecpecting a few environmental variables:

* **`url`** (**required**): The url to send the webhook to
* **`headers`** (**optional**): Any headers you want to be sent with the webhook
* **`body`** (**optional**): The body of data send with the webhook

## Issues

If you find any issues or have an improvement feel free to [submit an issue](https://github.com/joelwmale/webhook-action/issues/new)

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.

[ico-release]: https://img.shields.io/github/tag/joelwmale/webhook-action.svg
[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg
[link-github-release]: https://github.com/joelwmale/webhook-action/releases