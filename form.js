import { form } from "./elements.js";

const formClass = new FormData(form);

function showForm() {
  let isFormOpen = form.style.visibility === "visible";

  isFormOpen
    ? (form.style.visibility = "hidden")
    : (form.style.visibility = "visible");
}

export { showForm };
