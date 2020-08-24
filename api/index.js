import axios from 'axios';
import {config} from './config';

const client = axios.create({
  baseURL: config.baseUrl,
  timeout: config.timeout,
  headers: {
    Accept: 'application/json',
  },
});

// Add a response interceptor
client.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data;
    }
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

client.GET = async (route, data) => {
  try {
    let res = await client.get(
      route,
      !data ? {data: {}} : {data: JSON.stringify(data)},
    );
    return res;
  } catch (err) {
    console.log('err: ', err);
    throw err;
  }
};

export default client;
