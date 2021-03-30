import config from './config';
import { isNetworkConnected } from '../isNetworkConnected';
import Axios from 'axios';

const api_url = config.api_url;

function buildHeaders(options) {
  const authToken = null;
  const headers = {
    ...config.headers,
    ...(options && options.headers && options.headers),
  };
  if (authToken) {
    headers.Authorization = `Bearer ${authToken}`;
  }

  return headers;
}

async function api(method, path, data, options) {
  const url = api_url + path;

  const headers = await buildHeaders(options);
  const axiosConfig = {
    method,
    url,
    headers,
    ...(method === 'GET'
      ? {
          params: data,
        }
      : {
          data,
        }),
  };
  return await isNetworkConnected().then(status => {
    if (status) {
      return Axios(axiosConfig);
    } else {
      alert('Network is not conneted');
      return new Error('Network is not conneted');
    }
  });
}

export default {
  get: (path, params, options) => api('GET', path, params, options),
  post: (path, data, options) => api('POST', path, data, options),
  delete: (path, data, options) => api('DELETE', path, data, options),
  put: (path, data, options) => api('PUT', path, data, options),
};
