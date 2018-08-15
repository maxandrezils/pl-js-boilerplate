import 'whatwg-fetch';

export const getUsers = () => {
  return get('users');
};

const get = (url) => {
  return fetch(url).then(onSuccess, onError);
};

const onSuccess = (response) => {
  return response.json();
};

const onError = (error) => {
  console.log(error); // eslint-disable-line no-console
};
