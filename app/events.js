import { addBtn, submitBtn } from "../elements.js";
import { showForm } from "../form.js";
import { getItems } from "../events/addItem.js";

function initEvents() {
  addBtn.addEventListener("click", () => {
    showForm();
  });

  submitBtn.addEventListener("click", getItems);
}

export default initEvents;
