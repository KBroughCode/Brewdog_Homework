const PubSub = require('../helpers/pub_sub.js');

class BeerFormView {

  constructor(){
    this.element = document.querySelector('#beer-dropdown')
  }

    bindEvents() {
      //llistening for beers all ready so it can produce a dropdown list
      //using the selectBeer function
      PubSub.subscribe('Beers:All-beers-ready',(event) =>{
        const allBeers = event.detail;
        this.selectBeerList(allBeers);
        console.log(allBeers)
      });

      // listening for a change in value/name of beer and
      // publishes results so beer.js can then update the selection
    this.element.addEventListener('change', (event) => {
      const selectIndex = event.target.value;
      PubSub.publish('BeerSelection:Change', selectIndex);
    });
  }
      // select beer function creates dropdown list of Beers
      // using the array of beer info from API
    selectBeerList(beerData){
      beerData.forEach((beer,index)=>{
        const option = document.createElement('option');
        option.textContent = beer.name;
        option.value = index;
        this.element.appendChild(option)
    });
  }
}

module.exports = BeerFormView;
