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
    isValid = emailValidation(input);
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

function emailValidation(input) {
  const regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if(input.value.match(regexMail)) {
    return true;
  } else {
    return false;
  }
}

/**
 * Retourne si la value correspond à une date valide
 */

 function dateValidation(input) {
  if(input.valueAsNumber > 0) {
    return true;
  } else {
    return false;
  }
}

/**
 * Retourne si la value correspond à un nom valide
 */

function nameValidation(input) {
  if(input.value.length >= 2) {
    return true;
  } else {
    return false;
  }
}

/**
 * Retourne si la value correspond à un nombre valide
 */

 function numberValidation(input) {
  if(input.value.length > 0) {
    return true;
  } else {
    return false;
  }
}

/**
 * Retourne si la value correspond à la checkbox cochée
 */

 function checkboxValidation(input) {
  if(input.checked) {
    return true;
  } else {
    return false;
  }
}

/**
 * Retourne si la value correspond à la checkbox cochée
 */

 function radioValidation(input) {
   for (let i = 0, len = input.length; i < len; i++) {
     if(input[i].checked) {
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

  let firstNameValidation = inputValidationDisplay(firstnameInput, "name");
  let lastNameValidation = inputValidationDisplay(lastnameInput, "name");
  let emailValidation = inputValidationDisplay(emailInput, "email");
  let dateValidation = inputValidationDisplay(birthdateInput, "date");
  let numberValidation = inputValidationDisplay(tournamentInput, "number");
  let checkboxValidation = validateInput(checkboxInput, "checkbox");
  let radioValidation = validateInput(radioInput, "radio");

  if(firstNameValidation &&
     lastNameValidation &&
     emailValidation &&
     dateValidation &&
     numberValidation &&
     checkboxValidation &&
     radioValidation) {
      textError.innerHTML = "";
      closeModal();
     } else {
      textError.innerHTML = "Certains champs ne sont pas correctement remplis";
     }
}

function inputValidationDisplay(input, type) {
  let isValid = validateInput(input, type);

  if(isValid) {
    input.value.display = "none";
    input.style.backgroundColor="white";
  } else {
    input.style.backgroundColor="#fe142f";
    animation(input);
    input.style.display = "block";
  }
  return isValid;
}