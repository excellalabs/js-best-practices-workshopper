
var balance = 0;

module.exports = {
  insertCoin: function(coinType){
    var value = this.getAmount(coinType);
    this.increaseBalance(value);
  },
  vendProduct: function(productId){
    var product = this.getProduct(productId);
    this.decreaseBalance(product.price);
    return product;
  },
  releaseChange: function(){
    var balance = this.getBalance();
    this.decreaseBalance(balance);
    return this.convertToChange(balance);
  },
  getProducts: function() { 
    return [
      {
        name: 'Skittles',
        price: 85,
        id: 'A1'
      }
    ];
  },
  getProduct: function(productId) {
    switch(productId){
      case 'A1':
        return {
          name: 'Skittles',
          price: 85
        };
    }
  },
  getAmount: function(coinType) {
    switch(coinType){
      case 'p': return 1;
      case 'n': return 5;
      case 'd': return 10;
      case 'q': return 25;
      default: throw new Error('Unrecognized coin ' + coinType);
    }
  },
  increaseBalance: function(amount){
    balance += amount;
  },
  getBalance: function(){ 
    return balance;
  },
  canAfford: function(amount){
    if(this.isValidAmount(amount)){
        errorMessage = "Invalid Input";
        throw new Error(errorMessage);
    }
    return amount <= balance;
  },
  decreaseBalance: function(amount){
    if(!this.canAfford(amount)){
      var errorMessage = 'Insufficient balance';
      throw new Error(errorMessage);
    }
    balance -= amount;
  },
  isValidAmount: function(amount){
    if(amount === null){
      return false;
    } else {
      return true;
    }
  }
};