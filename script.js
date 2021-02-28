// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var passwordCriteria = [];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword()

//function to include uppercase letters
function firstPrompt {
  var firstResponse = confirm("Include special charaters?");
  if (firstResponse == true){
    passwordCriteria.push("yes");
    return secondPrompt()
  }
  if (firstResponse == false){
   passwordCriteria.push("no");
   return secondPrompt()
  }
}
//function to include uppercase letters
function secondPrompt() {
  var secondResponse = confirm("Include uppercase letters?");
  if (secondResponse == true) {
    passwordCriteria.push("yes")
  }
  if (secondResponse == false) {
    passwordCriteria.push("no")
  }

}

//function to confirm character count
function thirdPrompt() {
  var thirdResponse = prompt("Please enter character length", "Minimum of 8 characters and a maximum of 120")
}