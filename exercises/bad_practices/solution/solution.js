var balance = 0;

module.exports = {
  increaseBalance: function(amount){
    balance += amount;
  },
  getBalance: function(){ 
    return balance;
  },
  canAfford: function(amount){
    if(isValidAmount(amount)){
        var errorMessage = 'Invalid Input';
        throw new Error(errorMessage);
    }
    return amount <= balance;
  },
  decreaseBalance: function(amount){
    if(!canAfford(amount)){
      var errorMessage = 'Insufficient balance';
      throw new Error(errorMessage);
    }
    balance -= amount;
  },
  isValidAmount: function(amount){
    if(!amount){
      return false;
    } else {
      return true;
    }
  }
};