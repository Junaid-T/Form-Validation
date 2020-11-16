// An object which contains all the variable fields
const inputFields = function () {
  return {
    username: document.getElementById("username"),
    email: document.getElementById("email"),
    password1: document.getElementById("password1"),
    password2: document.getElementById("password2"),
  };
};

//Submit button
const submitBtn = document.getElementById("submit");

const checkInputs = function () {
  const usernameValue = inputFields().username.value.trim();
  const emailValue = inputFields().email.value.trim();
  const password1Value = inputFields().password1.value.trim();
  const password2Value = inputFields().password2.value.trim();

  const success = function (item) {
    item.classList.add("form-success");
  };

  const error = function (item) {
    item.classList.add("form-error");
    console.log(item.parentElement);
    item.parentElement.querySelector(".errorMsg").style.visibility = "visible";
  };

  const reset = function (...args) {
    args.forEach((e) => {
      e.classList.remove("form-success", "form-error");
      e.parentElement.querySelector(".errorMsg").style.visibility = "hidden";
    });
  };

  //////////////////////////////////////////////////////////////
  // Check input fields

  const checkUsername = function () {
    if (usernameValue.length > 5) {
      success(username);
      return true;
    }
    error(username);
    return false;
  };

  const checkEmail = function () {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(emailValue)) {
      success(email);
      return true;
    }
    error(email);
    return false;
  };

  const checkPassword = function () {
    if (password1Value.length < 8) {
      error(password1);
      return false;
    }
    const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (re.test(password1Value)) {
      success(password1);
      return true;
    }
    error(password1);
    return false;
  };

  const recheckPassword = function () {
    if (password2Value === "") {
      inputFields().password2.classList.add("form-error");
    }
    if (password1Value === password2Value) {
      success(password2);
      return true;
    }
    error(password2);
    return false;
  };

  /////////////////////////////////////////////////////////////////
  // Reset fields and call functions

  reset(username, email, password1, password2);

  checkUsername();
  checkEmail();
  checkPassword();
  recheckPassword();
};

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkInputs();
  document.getElementById("form").reset();
});
