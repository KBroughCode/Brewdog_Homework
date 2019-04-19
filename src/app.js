const Beer = require('./models/beer.js');
const BeerView = require('./views/beer_view.js')
const BeerFormView = require('./views/beer_form_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JS Loaded');

  const beerModel = new Beer();
  beerModel.getData();
  console.log(beerModel);

  const beer = new Beer();
  beer.bindEvents();

  const beerList = new BeerFormView();
  beerList.bindEvents()

  const beerView = new BeerView();
  beerView.bindEvents()
  // console.log(beerList)


});
