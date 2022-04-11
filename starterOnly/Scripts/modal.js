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

let firstNameValidation = false;
let lastNameValidation = false;
let emailValidation = false;
let tournamentValidation = false;
let birthDateValidation = false;
let checkBox1Validation = false;

form.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();
  firstNameFunction();
  lastNameFunction();
  emailFunction();
  tournamentFunction();
  checkBox1Function();
  birthDateFunction();
  testOK();
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
  textError.innerHTML = "";
  firstNameValidation = false;
  lastNameValidation = false;
  emailValidation = false;
  tournamentValidation = false;
  birthDateValidation = false;
  checkBox1Validation = false;
}

function firstNameFunction() {
  if(firstName.value.length >= 2) {
    firstNameValidation = true;
    errorFirst.style.display = "none";
    firstName.style.backgroundColor="white";
  } else {
    firstName.style.backgroundColor="#fe142f";
    animation(firstName);
    errorFirst.style.display = "block";
  }
}

function lastNameFunction() {
  if(lastName.value.length >= 2) {
    lastNameValidation = true;
    errorLast.style.display = "none";
    lastName.style.backgroundColor="white";
  } else {
    lastName.style.backgroundColor="#fe142f";
    animation(lastName);
    errorLast.style.display = "block";
  }
}

function emailFunction() {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if(emailRegex.test(email.value)) {
    emailValidation = true;
    errorEmail.style.display = "none";
    email.style.backgroundColor="white";
  } else {
    email.style.backgroundColor="#fe142f";
    animation(email);
    errorEmail.style.display = "block";
  }
}

function tournamentFunction() {
  if(tournament.value.length >= 1) {
    tournamentValidation = true;
    errorTournament.style.display = "none";
    tournament.style.backgroundColor="white";
  } else {
    tournament.style.backgroundColor="#fe142f";
    animation(tournament);
    errorTournament.style.display = "block";
  }
}

function checkBox1Function() {
  if(checkBox1.checked) {
    checkBox1Validation = true;
    errorCheckbox1.style.display = "none";
  } else {
    errorCheckbox1.style.display = "block";
  }
}

function birthDateFunction() {
  if(birthDate.valueAsNumber >= 1) {
    birthDateValidation = true;
    errorBirthdate.style.display = "none";
    birthDate.style.backgroundColor="white";
  } else {
    animation(birthDate);
    errorBirthdate.style.display = "block";
    birthDate.style.backgroundColor="#fe142f";
  }
}

function testOK() {
  if(firstNameValidation
    && lastNameValidation
    && emailValidation
    && tournamentValidation
    && checkBox1Validation
    && birthDateValidation) {
    closeModal();
    clearForm();
  } else {
    textError.innerHTML = "Certains champs ne sont pas correctement remplis";
  }
}