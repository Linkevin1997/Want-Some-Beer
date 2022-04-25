const fetchBeer = () => {
  fetch('https://api.punkapi.com/v2/beers')
  .then(resp => resp.json())
  .then(getBeer)
}

const getBeer = beerArray => {
  beerArray.forEach(beer => {
    const {image_url, name} = beer;
    
    const img = document.createElement('img');
    img.src = image_url;

    const beerName = document.createElement('h2');
    beerName.textContent = name;

    const card = document.createElement('div');
    card.className = 'card';
    card.append(img, beerName);
    document.querySelector('.item-container').appendChild(card);
  })
}

document.addEventListener('DOMContentLoaded', () => {
  fetchBeer();
})