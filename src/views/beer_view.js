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
      const beerName = document.createElement('h2');
      beerName.textContent = beer.name;
      this.container.innerHTML = " ";
      this.container.appendChild(beerName);

      const tagline = document.createElement('h1');
      tagline.textContent = beer.tagline;
      this.container.innerHTML = " ";
      this.container.appendChild(tagline);


    // const beerImg = document.createElement('img')
    // beerImg.src = beer;
    // return beerImg
    // this.container.appendChild(beerImg);

  }

}

module.exports = BeerView;
