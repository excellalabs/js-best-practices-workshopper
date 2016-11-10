
// COINS:
// [p]enny
// [n]ickel
// [d]ime
// [q]uarter

var coins = {
  'p': 1,
  'n': 5,
  'd': 10,
  'q': 25
};

var coinsByAmount = ['q', 'd', 'n', 'p'];

module.exports = {
  convertToChange: function(amount) {
    var change = [];
    for(var i in coinsByAmount){
      var coinType = coinsByAmount[i];
      var coinValue = coins[coinType];

      while(amount >= coinValue){
        change.push(coinType);
        amount -= coinValue;
      }
    }
    return change;
  }
};