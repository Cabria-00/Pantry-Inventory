class Item {
  constructor(itemName, category, quantity, expireDate) {
    this.itemName = itemName;
    this.itemCategory = category;
    this.itemQuantity = quantity;
    this.itemExpireDate = expireDate;
    this.itemShelfLifeDays = this.calcShelfLife();
    this.itemStatus = this.getItemStatus(this.itemShelfLife);
    this.uniqueCode = crypto.randomUUID();
  }

  calcShelfLife() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const expiryDate = new Date(this.itemExpireDate);
    expiryDate.setHours(0, 0, 0, 0);

    const daysUntilExpiry = (expiryDate - today) / (1000 * 60 * 60 * 24);

    return daysUntilExpiry;
  }

  getItemStatus(itemShelfLife) {
    if (Number(itemShelfLife) < 0) {
      return "Expired";
    }
    if (Number(itemShelfLife) <= 32) {
      return `Soon to Expire`;
    } else {
      return "Fresh";
    }
  }
}

export default Item;
