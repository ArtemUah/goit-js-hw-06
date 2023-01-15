const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const elementsOfForm = event.currentTarget.elements;
  const email = elementsOfForm.email.value;
  console.log(email);
  const password = elementsOfForm.password.value;
  console.log(password);
  if (email === null || password === null || email === "" || password === "") {
    alert("All the inputs must be fullfilled");
  } else {
    const obj = {
      email,
      password,
    };
    console.log(obj);
  }
});
