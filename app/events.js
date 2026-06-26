import { addBtn, submitBtn, form } from "../elements.js";
import { toggleForm } from "../form.js";
import { getItems } from "../events/addItem.js";

function initEvents() {
  addBtn.addEventListener("click", () => {
    toggleForm();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    getItems();
  });
}

export default initEvents;
