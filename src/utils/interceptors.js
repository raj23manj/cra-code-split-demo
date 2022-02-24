import http from './http-common';

const setupInterceptors = store => {
  // response handling interceptor
  http.interceptors.response.use(res => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("response:", res);
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
    console.log("request:", req);
    return req;
  }, err => {
    // Do something with request error
    console.log("request-error:", err);
    return Promise.reject(err);
  });
};

export default setupInterceptors;
