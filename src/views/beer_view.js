const PubSub = require('../helpers/pub_sub.js');
const Beer = require('../models/beer.js');

class BeerView{

  constructor(){
      this.container = document.querySelector('#beer-info-display');
  }

  bindEvents(){
      PubSub.subscribe('Beers:Selected-beers-ready', (event) =>{
        const beer = event.detail;
        console.log(beer);
        this.publish(beer)
        console.log(beer);
      })
    }

  publish(beer){
      const beerName = document.createElement('h2');
      beerName.textContent = beer;
      console.log(beer.name);
      this.container.innerHTML = " ";
      this.container.appendChild(beerName);
    // const beerImg = document.createElement('img')
    // beerImg.src = beer;
    // return beerImg
    // this.container.appendChild(beerImg);

  }

}

module.exports = BeerView;
