import superagent from 'superagent';

class HttpClient {
    get({ url, query }) {
        let request = superagent.get(url);

        if (query) {
            request = request.query(query);
        }

        return this.execute(request);
    }

    execute(request) {
        return new Promise((resolve, reject) => {
            request.end((error, response) => {
                if (error) {
                    return reject(error);
                }

                return resolve(response);
            });
        });
    }
}

export default new HttpClient();
