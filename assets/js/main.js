const newsletterForm = document.querySelector("#newsletter");
const subscriptionMessage = document.querySelector("#subscription-message");
const formInput = document.querySelector(".newsletter__input");
const formError = document.querySelector(".form-error");
const dismissBtn = document.querySelector("#dismiss");
const emailText = document.querySelector(".subscription__email");
const emailRegex = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (formInput.value === "") {
    formError.innerHTML = "Email is required";
  }

  if (formInput.value.match(emailRegex) == null) {
    formError.innerHTML = "Valid email required";
  }

  if (formInput.value === "" || formInput.value.match(emailRegex) === null) {
    formInput.classList.add("newsletter__input--error");
  }

  if (!formInput.classList.contains("newsletter__input--error")) {
    emailText.innerHTML = formInput.value;

    e.target.reset();
    newsletterForm.classList.add("d-none");
    subscriptionMessage.classList.remove("d-none");
  }
});

formInput.addEventListener("input", (e) => {
  if (formInput.classList.contains("newsletter__input--error")) {
    formInput.classList.remove("newsletter__input--error");
    formError.innerHTML = "";
  }
});

dismissBtn.addEventListener("click", () => {
  newsletterForm.classList.remove("d-none");
  subscriptionMessage.classList.add("d-none");
});
