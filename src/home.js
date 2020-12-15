const home = (content) => {
  const home = document.createElement('div');
  home.setAttribute('id', 'home');
  const headline = document.createElement('h1');
  headline.textContent = 'Restaurant';
  const image = document.createElement('img');
  image.setAttribute('src', 'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made.jpg');
  image.classList.add('w-100');
  const intro = document.createElement('p');
  intro.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, harum ab quibusdam vitae culpa nulla quia iste qui voluptatum a, similique ullam nesciunt maiores nisi est magnam architecto quae delectus?';
  home.appendChild(headline);
  home.appendChild(image);
  home.appendChild(intro);
  content.appendChild(home);
};

export default home;