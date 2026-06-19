class Item {
  constructor(itemName, category, quantity, expireDate) {
    this.itemName = itemName;
    this.itemCategory = category;
    this.itemQuantity = quantity;
    this.itemExpireDate = expireDate;
    this.timeSpan = expireDate - Date();
  }
}

export default Item;
