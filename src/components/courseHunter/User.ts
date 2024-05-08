class User {
  _login: string;
  password: string;

  get Login() {
    return this._login;
  }

  set Login(l: string) {
    this._login = "user-" + l;
  }
}

const user = new User();
user.Login = "my login";
console.log(user.Login);
