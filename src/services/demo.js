import http from './../utils/http-common';

class DemoService {
  getAll() {
    return http.get("products");
  }
}

export default new DemoService();
