import { API_URL } from '../helpers';
import Http from 'axios';
import querystring from 'querystring';

var cache = [];

class Api {
  constructor() {
    Http.defaults.baseURL = API_URL;
    Http.defaults.timeout = 300000;
  
  }

  async get(resource, params = {}) {
    Http.defaults.headers = {
      'x-access-token': localStorage.getItem('token'),
    };
    var config = {
      headers: {
        'x-access-token': localStorage.getItem('token'),
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    };
    try {
      let res = {};
      res = await Http.get(resource, params, config);

      return this.successResponse(res);
    } catch (error) {
      return this.errorResponse(error);
    }
  }

  async post(resource, params) {
    Http.defaults.headers = {
      'x-access-token': localStorage.getItem('token'),
    };
    var config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    };

    try {
      let response = await Http.post(
        resource,
        querystring.stringify(params),
        config
      );
      return this.successResponse(response);
    } catch (error) {
      return this.errorResponse(error);
    }
  }

  errorResponse(error) {
    if (error.response) {
      return this.response(error.response);
    } else {
      return this.response({
        data: 'Network Error'
      });
    }
  }

  successResponse(response) {
    return this.response(response);
  }

  response({ data, status, headers }) {
    return {
      body: data,
      status,
      headers
    };
  }
}

export default new Api();
