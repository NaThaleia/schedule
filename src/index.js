import './sass/main.scss';
import { refs } from './js/base/refs';
import login from './templates/login.hbs';
import loginPas from './api/login.json';

const start = () => {
  refs.login.insertAdjacentHTML('beforeend', login());
  authorization();
};

start();

function authorization() {
  const refAuthorization = document.querySelector('.js-authorization');
  refAuthorization.addEventListener('submit', onform);
}

function onform(e) {
  e.preventDefault();
  const login = e.target[0].value;
  const password = e.target[1].value;

  const promise = new Promise(resolve => {
    resolve(loginPas);
  });

  promise.then(data => {
    const user = data.find(e => e.login === login);

    if (user.password === password) {
      console.log('вы авторизированны');
    } else {
      console.log('вы ввели неправильный логин или пароль');
      return;
    }
    return data;
  });
}
