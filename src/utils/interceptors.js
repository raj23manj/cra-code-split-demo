import http from './http-common';
import { counterActions } from '../store/slices/counter/slice';

const setupInterceptors = store => {
  // response handling interceptor
  http.interceptors.response.use(res => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    store.dispatch(counterActions.increase(5));
    console.log("response:", res);
    console.log("store data:");
    return res;
  },
    err => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      console.log("response-error:", err);
      return Promise.reject(err);
    }
  );

  // request handling interceptor
  http.interceptors.request.use(req => {
    // Do something before request is sent
    store.dispatch(counterActions.increase(5));
    console.log("request:", req);
    return req;
  }, err => {
    // Do something with request error
    console.log("request-error:", err);
    return Promise.reject(err);
  });
};

export default setupInterceptors;
