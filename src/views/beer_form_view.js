const PubSub = require('../helpers/pub_sub.js');

class BeerFormView {

  constructor(){
    this.element = document.querySelector('#beer-dropdown')
  }
    bindEvents() {
      PubSub.subscribe('Beers:All-beers-ready',(event) =>{
        const allBeers = event.detail;
        this.selectBeer(allBeers);
        console.log("allbeers");
      });

    this.element.addEventListener('change', (event) => {
      const selectIndex = event.target.value;
      console.log(event);
      PubSub.publish('BeerSelection:Change', selectIndex);
    });
  }

    selectBeer(beerData){
      beerData.forEach((beer,index)=>{
        const option = document.createElement('option');
        option.textContent = beer.name;
        option.value = index;
        console.log(option);
        this.element.appendChild(option)
    });
  }
}

module.exports = BeerFormView;
