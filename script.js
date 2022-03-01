const submit = document.querySelector("button");
const input = document.querySelector("input");

submit.addEventListener("click", (event) => {
  if (input.value.match(emailFormatRegex)) {
    alert("Thank you for stay up-to-date with us");
  } else {
    event.preventDefault();
    document.querySelector("form").classList.add("active");
    document.querySelector(".error-icon").classList.add("active");
    document.querySelector(".alert").classList.add("active");
  }
});

const emailFormatRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
