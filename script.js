// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var passwordCriteria = ["","",0];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  var response1 = prompt("Include special charaters?", "yes/no");

  if (response1 !== "yes" && response1 !== "no"){
    alert("please provide a valid response");
  }
  if (response1 == "yes"){
    passwordCriteria.[0] = "yes";
    return secondPrompt()
  }
  if (response1 == "no"){
    passwordCriteria.[0] = "yes";
    return secondPrompt()
  }
}

function secondPrompt() {
  var response2 = prompt("Include uppercase letters?", "yes/no");
  if (response2 !== "yes" && response2 !== "no"){
    alert("please provide a valid response");
  }
  if ()

}