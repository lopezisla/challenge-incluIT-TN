class Promotions {
  constructor(data) {
    const { shopName, discount } = data;
    this.id = Math.random().toString(36);
    this.start_date = this._initializeStartDate();
    this.shopName = shopName;
    this.discount = discount;
  };

  _initializeStartDate() {
    return new Date().toISOString().split("T")[0];
  };

  get shop() {
    return this.shopName;
  }
}

const promotion = new Promotions({
  shopName: 'Lacoste',
  discount: 25
});

console.log(promotion.shop);