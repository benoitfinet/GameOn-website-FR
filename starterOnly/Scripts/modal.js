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
const formContent = document.getElementById("formContent");

// modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalCross.forEach((cross) => cross.addEventListener("click", closeModal));

// modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeModal() {
  modalbg.style.display = "none";
  window.location.reload();
}

//form validation


const firstnameInput = document.getElementById("first");
const lastnameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const tournamentInput = document.getElementById("quantity");
const checkboxInput = document.getElementById("checkbox1");
const radioInput = document.getElementsByName("location");
const textError = document.getElementById("textUnderButton");
const firstnameError = document.getElementById("errorFirst");
const lastnameError = document.getElementById("errorLast");
const emailError = document.getElementById("errorEmail");
const birthdateError = document.getElementById("errorBirthdate");
const tournamentError = document.getElementById("errorTournament");
const checkboxError = document.getElementById("errorCheckbox1");
const radioError = document.getElementById("errorRadio");

/**
 * Appelle l'animation en cas d'erreur
 */
function animation(input) {
  input.animate([
    { transform: 'translateX(2%)' },
    { transform: 'translateY(2% * -2)' }
  ], {
    duration: 100,
    iterations: 3
  });
}

/**
 * Retourne si la value en fonction du type est valide ou pas
 */
function validateInput(input, type) {
  let isValid = false;

  if(type === "email") {
    isValid = emailValidation(input.value);
  } else if (type === "date") {
    isValid = dateValidation(input);
  } else if (type === "name") {
    isValid = nameValidation(input);
  } else if (type === "number") {
    isValid = numberValidation(input);
  } else if (type === "checkbox") {
    isValid = checkboxValidation(input);
  } else if (type === "radio") {
    isValid = radioValidation(input);
  }
  return isValid;
}

/**
 * Retourne si la value correspond à un email valide
 */
 function emailValidation(value) {
  const regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  return regexMail.test(value)
}

/**
 * Retourne si la value correspond à une date valide
 */
 function dateValidation(input) {
  return input.valueAsNumber > 0
}

/**
 * Retourne si la value correspond à un nom valide
 */
function nameValidation(input) {
  return input.value.trim().length >= 2
}

/**
 * Retourne si la value correspond à un nombre valide
 */
 function numberValidation(input) {
  return input.value.length > 0
}

/**
 * Retourne si la value correspond à la checkbox cochée
 */
 function checkboxValidation(input) {
  return input.checked
}

/**
 * Retourne si la value correspond à la checkbox "radio" cochée
 */
 function radioValidation(inputs) {
   for (let i = 0; i < inputs.length; i++) {
     if(inputs[i].checked) {
       return true;
     }
    }
  return false;
}

/**
 * Validation du formulaire
 */
function validate(event) {

  event.preventDefault();

  let firstNameValidation = inputValidationDisplay(firstnameInput, "name", firstnameError);
  let lastNameValidation = inputValidationDisplay(lastnameInput, "name", lastnameError);
  let emailValidation = inputValidationDisplay(emailInput, "email", emailError);
  let dateValidation = inputValidationDisplay(birthdateInput, "date", birthdateError);
  let numberValidation = inputValidationDisplay(tournamentInput, "number", tournamentError);
  let checkboxValidation = inputValidationCheckbox(checkboxInput, "checkbox", checkboxError);
  let radioValidation = inputValidationCheckbox(radioInput, "radio", radioError);

  if(firstNameValidation &&
     lastNameValidation &&
     emailValidation &&
     dateValidation &&
     numberValidation &&
     checkboxValidation &&
     radioValidation) {
      textError.innerHTML = "";
      formContent.innerHTML =
      `<div class='confirmationMessage'>
      <p>Votre réservation est bien prise en compte</p>
      </br>
      <span onclick='closeModal()' class='btn-submit button btn-confirmation'>Fermer</span>
      </div>`;
     } else {
      textError.innerHTML = "Certains champs ne sont pas correctement remplis";
     }
}

/**
 * Validation for all expect checkbox and radio
 */
function inputValidationDisplay(input, type, error) {
  let isValid = validateInput(input, type, error);

  if(isValid) {
    input.style.border="none";
    error.style.display = "none";
  } else {
    input.style.border="3px outset #fe142f";
    animation(input);
    error.style.display = "block";
  }
  return isValid;
}

/**
 * Validation for checkbox and radio
 */
function inputValidationCheckbox(input, type, error) {
  let isValid = validateInput(input, type, error);

  if(isValid) {
    error.style.display = "none";
  } else {
    error.style.display = "block";
  }
  return isValid;
}

/**
 * Validation when user is writing
 */

function inputValidationInstant(input, type, error) {
  let isValid = validateInput(input, type, error);

  if(isValid) {
    input.style.border="none";
    error.style.display = "none";
  }
  return isValid;
}