import { form, submitBtn, closeFormBtn } from "../elements.js";
import Item from "../Pantry-Items.js";
import pantryItems from "../state/state.js";
import { toggleForm, resetForm } from "../form.js";

export function getItems() {
  const data = Object.fromEntries(new FormData(form));

  const newItem = new Item(
    data.itemName,
    data.itemCategory,
    data.itemQuantity,
    data.itemExpireDate,
  );

  pantryItems.push(newItem);

  console.log(newItem);
  console.log(newItem.calcShelfLife());
  console.log(newItem.getItemStatus());

  resetForm();
  toggleForm();
}
