# 🚀 Webhook Action

[![GitHub Release][ico-release]][link-github-release]
[![License][ico-license]](LICENSE)

A Github Action for sending data to an endpoint

Supports all [workflow event types](https://developer.github.com/webhooks/#events)

<hr/>

## Usage

Sending a string:

```yml
- name: Webhook
  uses: joelwmale/webhook-action@master
  env:
    WEBHOOK_URL: ${{ secrets.WEBHOOK_URL }}
    data: "Hello from github actions!"
```

Sending a body of data:

```yml
- name: Webhook
  uses: joelwmale/webhook-action@master
  env:
    WEBHOOK_URL: ${{ secrets.WEBHOOK_URL }}
    data: "{'deployment': 'finished', 'project': 'actions'}"
```

It is **highly** recommended to use the action is an explicit commit SHA-1:

`uses = "joelwmale/webhook-action@{SHA-1}"` to find a commit click here: https://github.com/joelwmale/webhook-action/commits/master

### Arguments

* ```yml 
  data: "Hello from github actions!"
  ```

* ```yml
  data: "{'deployment': 'finished', 'project': 'actions'}"
  ```

### Environment

The action is expecting a single environment variable of your data. This can be pre-encoded json string, or just a message. Format it to how your API is expecting.

* **`WEBHOOK_URL`** (**required**): This is the webhook url to send the payload to.

## Issues

If you find any issues or have an improvement feel free to [submit an issue](https://github.com/joelwmale/webhook-action/issues/new)

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.

[ico-release]: https://img.shields.io/github/tag/joelwmale/webhook-action.svg
[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg
[link-github-release]: https://github.com/joelwmale/webhook-action/releases