import home from './home';
import contact from './contact';
import menu from './menu';

const content = document.querySelector('#content');

const homeTab = document.querySelector('.home-tab');
const contactTab = document.querySelector('.contact-tab');
const menuTab = document.querySelector('.menu-tab');
const tabs = [homeTab, contactTab, menuTab];

home(content);

homeTab.addEventListener('click', () => {
  content.innerHTML = '';
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });
  homeTab.classList.toggle('active');
  home(content);
});

contactTab.addEventListener('click', () => {
  content.innerHTML = '';
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });
  contactTab.classList.toggle('active');
  contact(content);
});

menuTab.addEventListener('click', () => {
  content.innerHTML = '';
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });
  menuTab.classList.toggle('active');
  menu(content);
});