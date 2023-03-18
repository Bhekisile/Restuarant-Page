
const restaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const image = document.createElement('img');
    image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkpDiqZrUmWZKoAPLkTWBt_eV1WGmCR9lp50yLpJK1zQ&s';
    image.height = '300';
    pageContent.appendChild(image);

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to our restaurant!';
    pageContent.appendChild(headline);

    const copy = document.createElement('p');
    copy.textContent = 'We serve the best food in town. Come and dine with us!';
    pageContent.appendChild(copy);
    content.appendChild(pageContent);
}

export default restaurantHomePage; 