import { addBtn } from "../elements.js";
import { showForm } from "../form.js";

function initEvents() {
  addBtn.addEventListener("click", () => {
    showForm();
  });
}

export default initEvents;
