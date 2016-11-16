
module.exports = {
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
  }
};