import { form } from "./elements.js";

function toggleForm() {
  let isFormOpen = form.style.visibility === "visible";

  isFormOpen
    ? (form.style.visibility = "hidden")
    : (form.style.visibility = "visible");
}

function resetForm() {
  form.reset();
}

export { toggleForm, resetForm };
