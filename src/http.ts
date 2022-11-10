import fetch from 'node-fetch';
var https = require('https')

class Http {
  make(
    url: string,
    body: string | null,
    headers: string | null = null,
    ignoreCertificate: boolean | null = false
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      fetch(
        url,
        this.getOptions('post', headers, body, ignoreCertificate)
      ).then((res: any) => resolve(res))
    })
  }

  getOptions(
    method: string,
    headers: string | null,
    body: string | null,
    ignoreCertificate: boolean | null
  ) {
    const options: any = {
      headers: headers ? JSON.parse(headers) : {},
      method
    }

    if (body) {
      // parse the body
      options.body = body
    }

    if (ignoreCertificate) {
      // ignore the certificate by not rejecting authorized servers
      options.agent = new https.Agent({rejectUnauthorized: false})
    }

    // set these headers
    options.headers['content-type'] = 'application/json'

    return options
  }
}

export const http = new Http()
