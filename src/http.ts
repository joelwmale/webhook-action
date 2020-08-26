const axios = require('axios').default;

class Http {
  async make(url: string, headers: string, body: string): Promise<any> {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url,
        headers: this.getHeaders(headers),
        data: JSON.parse(body)
      })
        .then((res) => resolve(res.body))
        .catch((res) => reject(res.body));
    });
  }

  getHeaders(headersString: string): object {
    const headers = JSON.parse(headersString);

    // set these headers
    headers['content-type'] = 'application/json';

    return headers;
  }
}

export const http = new Http();