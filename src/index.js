import home from './home';
import contact from './contact';
import menu from './menu';

const content = document.querySelector('#content');

const homeTab = document.querySelector('.home-tab');
const contactTab = document.querySelector('.contact-tab');
const menuTab = document.querySelector('.menu-tab');
const tabs = [homeTab, contactTab, menuTab];

home(content);

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    content.innerHTML = '';
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
    tab.classList.toggle('active');
  });
});

homeTab.addEventListener('click', () => {
  home(content);
});

contactTab.addEventListener('click', () => {
  contact(content);
});

menuTab.addEventListener('click', () => {
  menu(content);
});