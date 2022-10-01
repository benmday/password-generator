// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = window.prompt("How many characters would you like your password to be?");
  while (length < 8 || length > 128) {
    length = window.prompt("Password length MUST be between 8 and 128 characters. Please enter a new length.");
  } 
  var hasLowercase = window.confirm("Would you like your password to contain lowercase letters? (select 'OK' for yes, or  'Cancel' for no)");
  var lowercase = "abcdefghijklmnopqrstuvwxyz"

  var hasUppercase = window.confirm("Would you like your password to contain uppercase letters?");
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  var hasNumbers = window.confirm("Would you like your password to contain numbers?");
  var numbers = "0123456789"

  var hasSymbols = window.confirm("Would you like your password to contain symbols?");
  var symbols = "!@#$%^&*()_?<>"

  while (!hasLowercase && !hasUppercase && !hasNumbers && !hasSymbols) {
    window.alert("You MUST select at least one character-type to continue.")

    hasLowercase = window.confirm("Would you like your password to contain lowercase letters? (select 'OK' for yes, or  'Cancel' for no)");

    hasUppercase = window.confirm("Would you like your password to contain uppercase letters?");
  
    hasNumbers = window.confirm("Would you like your password to contain numbers?");
  
    hasSymbols = window.confirm("Would you like your password to contain symbols?");
  }

  var passwordPossibilities = "";
  
  if (hasLowercase) {
    passwordPossibilities += lowercase;
  }
  
  if (hasUppercase) {
    passwordPossibilities += uppercase;
  }

  if (hasNumbers) {
    passwordPossibilities += numbers;
  }

  if (hasSymbols) {
    passwordPossibilities += symbols;
  } 

  

}
// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
