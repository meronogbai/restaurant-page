const menu = (content) => {
  const menu = document.createElement('div');
  menu.setAttribute('id', 'menu');
  const headline = document.createElement('h1');
  headline.textContent = 'Our Menu!';
  const menuImage = document.createElement('img');
  menuImage.setAttribute('src', 'https://i.pinimg.com/564x/f0/77/a5/f077a520ee8627ecce1eb3d50edb16c2.jpg');
  menuImage.classList.add('w-100');
  menu.appendChild(headline);
  menu.appendChild(menuImage);
  content.appendChild(menu);
};

export default menu;