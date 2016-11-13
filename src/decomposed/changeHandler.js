
// COINS:
// [p]enny
// [n]ickel
// [d]ime
// [q]uarter

module.exports = {
  getAmount: function(coinType) {
    switch(coinType){
      case 'p': return 1;
      case 'n': return 5;
      case 'd': return 10;
      case 'q': return 25;
      default: throw new Error('Unrecognized coin ' + coinType);
    }
  }
};