const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

class Beer{

constructor(){
  this.data = [];
}

bindEvents(){
  // subsribes to change in beer selection from beer form view
  PubSub.subscribe('BeerSelection:Change',(event) => {
    const selectIndex = event.detail;
    console.log(selectIndex);
  PubSub.publish('Beers:Selected-beers-ready',selectIndex)

    // this.publishInstrumentdetails(selectIndex)
  });
}

getData(){
    //gets data from API and publishes beers.js
    const url = 'https://api.punkapi.com/v2/beers'
    const requestHelper = new RequestHelper(url);
    requestHelper.get()
      .then((data) => {
        this.data = data;
        console.log(data);
        PubSub.publish('Beers:All-beers-ready',this.data);
      })
  }





}
module.exports = Beer;
