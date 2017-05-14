import superagent from 'superagent';

const execute = request =>
  new Promise((resolve, reject) => {
    request.end((error, response) => {
      if (error) {
        return reject(error);
      }

      return resolve(response);
    });
  });

const get = ({ url, query }) => {
  let request = superagent.get(url);

  if (query) {
    request = request.query(query);
  }

  return execute(request);
};

export default {
  get,
};
