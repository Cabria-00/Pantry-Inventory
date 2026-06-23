import { form } from "./elements.js";

function showForm() {
  let isFormOpen = form.style.visibility === "visible";

  isFormOpen
    ? (form.style.visibility = "hidden")
    : (form.style.visibility = "visible");
}

function resetForm() {
  form.reset();
}

export { showForm, resetForm };
