const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

class Beer{

constructor(){
  this.data = [];
}

bindEvent(){
  PubSub.subscribe('BeerSelection:Change',(event) => {
    const selectIndex = event.detail;
    this.publishInstrumentdetails(selectIndex)
  });
}

getData(){
    const url = 'https://api.punkapi.com/v2/beers'
    const requestHelper = new RequestHelper(url);
    requestHelper.get()
      .then((data) => {
        this.data = data;
        PubSub.publish('Beers:All-beers-ready',this.data);
      })
  }



}
module.exports = Beer;
