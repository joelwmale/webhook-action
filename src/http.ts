const fetch = require('node-fetch');
const https = require('https');

class Http {
  make(url: string, headers: string|null, body: string|null, insecure: boolean|false): Promise<any> {
    return new Promise((resolve, reject) => {
      fetch(url, this.getOptions('post', headers, body, insecure))
        .then((res: Response) => resolve(res));
    });
  }

  getOptions(method: string, headers: string|null, body: string|null, insecure: boolean|false) {
    const options: any = {
      headers: headers ? JSON.parse(headers) : {},
      method
    };

    if (body) {
      // parse the body
      options.body = body;
    }

    if (insecure) {
      options.agent = new https.Agent({ rejectUnauthorized: false });
    }

    // set these headers
    options.headers['content-type'] = 'application/json';

    return options;
  }
}

export const http = new Http();