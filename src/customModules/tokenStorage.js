const TOKEN = 'token';

export default class TokenStorage {

  saveToken(token, name) {
    localStorage.setItem(TOKEN, token);
    localStorage.setItem('name', name);
  }

  getToken() {
    return localStorage.getItem(TOKEN);
  }

  getName() {
    return localStorage.getItem('name');
  }

  clearToken() {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem('name');
  }
}


