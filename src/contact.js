const contact = (content) => {
  const contact = document.createElement('div');
  contact.setAttribute('id', 'contact');
  const headline = document.createElement('h1');
  headline.textContent = 'Conact Us!';
  const location = document.createElement('img');
  location.setAttribute('src', 'https://nirvan66.github.io/img/geoguessrai/location.jpg');
  location.classList.add('w-100');
  const contactDetails = document.createElement('div');
  contactDetails.innerHTML = '<ul class="my-4"><li>Phone Number: +920 214-9860</li><li><a href="mailto:restaurant@example.org">Email</a></li></ul';
  contact.appendChild(headline);
  contact.appendChild(location);
  contact.appendChild(contactDetails);
  content.appendChild(contact);
};
export default contact;