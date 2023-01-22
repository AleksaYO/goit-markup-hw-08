const form = document.querySelector(".js-modal__form");
const inputName = document.querySelector('input[type="name"]');
const inputTel = document.querySelector('input[type="tel"]');
const inputEmail = document.querySelector('input[type="email"]');
const formBtnModal = document.querySelector(".form-modal-btn");
const checkbox = document.getElementById("checkbox");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { name, tel, email, checkbox, textarea },
  } = event.currentTarget;
  if (checkbox.checked === true) {
    formBtnModal.disabled = false;
    if (name.value === "" || tel.value === "" || email.value === "") {
      alert("Все поля должны быть заполненны");
    } else if (
      inputName.value === name.value ||
      inputTel.value === tel.value ||
      inputEmail.value === email.value
    ) {
      console.log(`
Name: ${name.value}
Tel: ${tel.value}
Email: ${email.value}
Commtent: ${textarea.value}`);
      formBtnModal.style.backgroundColor = "green";
    }
  } else {
    alert("Ви не погодилися з умовами договру");
  }
}

const formEl = document.querySelector(".form-box");
const inputEl = document.getElementById("email");

formEl.addEventListener("submit", onFormEmailSubmit);

function onFormEmailSubmit(event) {
  event.preventDefault();
  const {
    elements: { email },
  } = event.currentTarget;
  if (email.value === "") {
    alert("Bи не ввели почту");
  } else {
    console.log(`Email: ${email.value}`);
  }
}
