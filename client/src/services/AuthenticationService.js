import Api from '@/services/Api';

/*
 * AuthenticationService.register({
 *  email: 'testing@email.com',
 *  password: '123456'
 * });
*/

export default {
  register(credentials) {
    return Api().post('register', credentials);
  },
  login(credentials) {
    return Api().post('login', credentials);
  },
};
