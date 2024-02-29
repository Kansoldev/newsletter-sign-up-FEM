const newsletterForm = document.querySelector(".newsletter__form");
const formInput = document.querySelector(".newsletter__input");
const formError = document.querySelector(".form-error");
const emailRegex = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (formInput.value === "") {
    formInput.classList.add("newsletter__input--error");
    formError.innerHTML = "Email is required";
    formError.style = "visibility: visible";
  }

  if (formInput.value.match(emailRegex) == null) {
    formInput.classList.add("newsletter__input--error");
    formError.innerHTML = "Valid email required";
    formError.style = "visibility: visible";
  }
});

formInput.addEventListener("input", (e) => {
  if (formInput.classList.contains("newsletter__input--error")) {
    formInput.classList.remove("newsletter__input--error");
    formError.innerHTML = "Valid email required";
    formError.style = "visibility: hidden";
  }
});
