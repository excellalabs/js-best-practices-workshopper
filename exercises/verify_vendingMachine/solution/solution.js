var balanceManager = require('./balanceManager');
var changeHandler = require('./changeHandler');
var productInventory = require('./productInventory');

module.exports = {
  insertCoin: function(coinType){
    var value = changeHandler.getAmount(coinType);
    balanceManager.increaseBalance(value);
  },
  vendProduct: function(productId){
    var product = productInventory.getProduct(productId);
    balanceManager.decreaseBalance(product.price);
    return product;
  },
  getProducts: function(){
    return productInventory.getProducts();
  },
  releaseChange: function(){
    var balance = balanceManager.getBalance();
    balanceManager.decreaseBalance(balance);
    return changeHandler.convertToChange(balance);
  }
};