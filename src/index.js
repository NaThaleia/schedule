import './sass/main.scss';
import { refs } from './js/base/refs';
import login from './templates/login.hbs';

const start = () => {
  refs.conteiner.insertAdjacentHTML('beforeend', login());
};

start();
