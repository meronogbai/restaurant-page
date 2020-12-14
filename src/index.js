const content = document.querySelector('#content');
const headline = document.createElement('h1');
headline.textContent = 'Restaurant';
const image = document.createElement('img');
image.setAttribute('src', 'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made.jpg');
image.classList.add('w-100')
const intro = document.createElement('p');
intro.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, harum ab quibusdam vitae culpa nulla quia iste qui voluptatum a, similique ullam nesciunt maiores nisi est magnam architecto quae delectus?';
content.appendChild(headline);
content.appendChild(image);
content.appendChild(intro);