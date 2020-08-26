const fetch = require('node-fetch');

class Http {
  make(url: string, headers: string, body: string): Promise<any> {
    return new Promise(() => {
      fetch(url, this.getOptions('post', headers, body));
    });
  }

  getOptions(method: string, headers: string, body: string) {
    const options: any = {
      headers: JSON.parse(headers),
      method
    };

    // stringify the body
    options.body = JSON.stringify(body);

    // set these headers
    options.headers['content-type'] = 'application/json';

    return options;
  }
}

export const http = new Http();