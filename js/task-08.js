const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const elementsOfForm = event.currentTarget.elements;
  let email = elementsOfForm.email.value;
  let password = elementsOfForm.password.value;
  if (email === null || password === null || email === "" || password === "") {
    alert("All the inputs must be fullfilled");
  } else {
    const obj = {
      email,
      password,
    };
    formEl.reset();
    console.log(obj);
  }
});
