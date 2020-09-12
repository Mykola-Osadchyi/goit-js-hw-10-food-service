import itemsTemplate from '../templates/menu-items.hbs';
import dishes from '../menu.json'

const menuRef = document.querySelector('.js-menu');
const markup = itemsTemplate(dishes);
menuRef.insertAdjacentHTML('beforeend', markup);