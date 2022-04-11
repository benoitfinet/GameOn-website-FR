function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCross = document.querySelectorAll(".close");

// modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalCross.forEach((cross) => cross.addEventListener("click", closeModal));

// modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
}

// form validation

const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const tournament = document.getElementById("quantity");
const checkBox1 = document.getElementById("checkbox1");
const form = document.getElementById("formToSend");
const textError = document.getElementById("textUnderButton");
const errorFirst = document.getElementById("errorFirst");
const errorLast = document.getElementById("errorLast");
const errorEmail = document.getElementById("errorEmail");
const errorBirthdate = document.getElementById("errorBirthdate");
const errorTournament = document.getElementById("errorTournament");
const errorCheckbox1 = document.getElementById("errorCheckbox1");

form.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();

  let firstNameValidation = false;
  let lastNameValidation = false;
  let emailValidation = false;
  let tournamentValidation = false;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  let birthDateValidation = false;
  let checkBox1Validation = false;
  let radioValidation = false;

  if(firstName.value.length >= 2) {
    firstNameValidation = true;
  } else {
    firstName.style.backgroundColor="#fe142f";
    animation(firstName);
    errorFirst.style.display = "block";
  }

  if(lastName.value.length >= 2) {
    lastNameValidation = true;
  } else {
    lastName.style.backgroundColor="#fe142f";
    animation(lastName);
    errorLast.style.display = "block";
  }

  if(emailRegex.test(email.value)) {
    emailValidation = true;
  } else {
    email.style.backgroundColor="#fe142f";
    animation(email);
    errorEmail.style.display = "block";
  }

  if(tournament.value.length >= 1) {
    tournamentValidation = true;
  } else {
    tournament.style.backgroundColor="#fe142f";
    animation(tournament);
    errorTournament.style.display = "block";
  }

  if(checkBox1.checked) {
    checkBox1Validation = true;
  } else {
    errorCheckbox1.style.display = "block";
  }

  if(birthDate.valueAsNumber >= 1) {
    birthDateValidation = true;
  }

  if(document.querySelectorAll("input[type=radio]:checked")){
    radioValidation = true;
  }

  if(firstNameValidation
    && lastNameValidation
    && emailValidation
    && tournamentValidation
    && checkBox1Validation
    && birthDateValidation
    && radioValidation) {
    closeModal();
    clearForm();
  } else {
    textError.innerHTML = "Certains champs ne sont pas correctement remplis";
  }
}

function animation(target) {
  target.animate([
    { transform: 'translateX(2%)' },
    { transform: 'translateY(2% * -2)' }
  ], {
    duration: 100,
    iterations: 3
  });
}

function clearForm() {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  birthDate.value = "";
  tournament.value = "";
  checkBox1.value = "";
  textError.value = "";
}
