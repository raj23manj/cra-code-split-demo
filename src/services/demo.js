import http from './../utils/http-common';

class DemoService {
  getAll() {
    return http.get("products/1");
  }
}

export default new DemoService();
