import delay from './delay';

class UserApi {
  static loginSuccess() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], {userid: 1}, {name: 'Rocky'}, {lastlogin: 1494233583}));
      }, delay);
    });
  }
  static logoutSuccess() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], {msg: '0'}));
      }, delay);
    });
  }
}

export default UserApi;
