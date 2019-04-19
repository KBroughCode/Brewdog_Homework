const RequestHelper = require('../helpers/request_helper.js');

class Beer{

constructor(){
  this.data = [];
}

getData(){
    const url = 'https://api.punkapi.com/v2/beers'
    const requestHelper = new RequestHelper(url);
    requestHelper.get()
      .then((data) => {
        this.data = data;
      })
  }



}
module.exports = Beer;
