const fetch = require('node-fetch');

class Http {
  make(url: string, headers: string|null, body: string|null): Promise<any> {
    return new Promise((resolve, reject) => {
      fetch(url, this.getOptions('post', headers, body))
        .then((res: Response) => resolve(res));
    });
  }

  getOptions(method: string, headers: string|null, body: string|null) {
    const options: any = {
      headers: headers ? JSON.parse(headers) : {},
      method
    };

    if (body) {
      // parse the body
      options.body = body;
    }

    // set these headers
    options.headers['content-type'] = 'application/json';

    return options;
  }
}

export const http = new Http();