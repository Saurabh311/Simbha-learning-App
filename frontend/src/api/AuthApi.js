import Api from './Api';

class AuthApi {
  authenticate({ email, password }) {
    return Api.post('/authenticate', { email, password });
  }

  register({ name, email, password, userType, grade, imgUrl }) {
    return Api.post('/register', { name, email, password, userType, grade, imgUrl });
  }

  getEmail() {
    return Api.get('/user');
  }
}

export default new AuthApi();
