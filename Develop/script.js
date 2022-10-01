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

  var password = "";
 
  function createPassword() {
    password = "";
    for (var i = 0; i < Number(length); i++) {
      password += passwordPossibilities[Math.floor(Math.random() * passwordPossibilities.length)]
    }
  }

  var lowercaseCheck = false;
  var uppercaseCheck = false;
  var numbersCheck = false;
  var symbolsCheck = false;

  while ((hasLowercase && !lowercaseCheck) || (hasUppercase && !uppercaseCheck) || (hasNumbers && !numbersCheck) || (hasSymbols && !symbolsCheck)) {
    createPassword()
    if (hasLowercase) {
      for (var i = 0; i < lowercase.length; i++) {
       if (password.includes(lowercase[i])) {
        lowercaseCheck = true;
        break
       }
      } 
    }
  
    if (hasUppercase) {
      for (var i = 0; i < uppercase.length; i++) {
       if (password.includes(uppercase[i])) {
        uppercaseCheck = true;
        break
       }
      } 
    }
  
    if (hasNumbers) {
      for (var i = 0; i < numbers.length; i++) {
       if (password.includes(numbers[i])) {
        numbersCheck = true;
        break
       }
      } 
    }
  
    if (hasSymbols) {
      for (var i = 0; i < symbols.length; i++) {
       if (password.includes(symbols[i])) {
        symbolsCheck = true;
        break
       }
      } 
    }
  }
  
  return password;
  
}
// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
