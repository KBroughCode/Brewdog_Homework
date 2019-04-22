const PubSub = require('../helpers/pub_sub.js');
const Beer = require('../models/beer.js');

class BeerView{

  constructor(){
      this.container = document.querySelector('#beer-info-display');
  }

  bindEvents(){
      PubSub.subscribe('Beers:Selected-beers-ready', (event) =>{
        const beer = event.detail;
        this.publish(beer)
      })
    }

  publish(beer){

    this.container.innerHTML = " ";

      const beerName = document.createElement('h1');
      beerName.textContent = beer.name;
      this.container.appendChild(beerName);

      const tagline = document.createElement('h2');
      tagline.textContent = '- ' + beer.tagline;
      this.container.appendChild(tagline);

      const description = document.createElement('h3');
      description.textContent = 'DESCRIPTION: '+ beer.description;
      // this.container.innerHTML = "Description";
      this.container.appendChild(description);

      const foodPairing = document.createElement('h3');
      foodPairing.textContent = 'EAT WITH: '+ beer.food_pairing;
      foodPairing.id = "food-pairing";
      // this.container.innerHTML = "Eat with";
      this.container.appendChild(foodPairing);

      const beerImage = document.createElement('img');
      beerImage.src = beer.image_url;
      beerImage.id = "beer-img";
      this.container.appendChild(beerImage);


    // const beerImg = document.createElement('img')
    // beerImg.src = beer;
    // return beerImg
    // this.container.appendChild(beerImg);

  }

}

module.exports = BeerView;
