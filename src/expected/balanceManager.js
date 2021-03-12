var balance = 0;

module.exports = {
  increaseBalance: function(amount){
    balance += amount;
  },
  getBalance: function(){
    return balance;
  },
  canAfford: function(amount){
    if(!this.isValidAmount(amount)){
      throw new Error('Invalid Input');
    }
    return amount <= balance;
  },
  decreaseBalance: function(amount){
    if(!this.canAfford(amount)){
      throw new Error('Insufficient balance');
    }
    balance -= amount;
  },
  isValidAmount: function(amount){
    return amount !== null && amount !== undefined;
  }
};
