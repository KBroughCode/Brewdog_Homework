const Beer = require('./models/beer.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JS Loaded');

  const beerModel = new Beer();
  beerModel.getData();
  console.log(beerModel);

});
