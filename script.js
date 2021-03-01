// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseArr = ["qwertyuiopasdfghjklzxcvbnm"]
var upperCaseArr = ["QWERTYUIOPASDFGHJKLZXCVBNM"]
var numbersArr = ["1234567890"]
var specialArr = ["!@#$%^&*()_+-=/?."]
var passwordCriteria = [];
var numberLength;
var randomizedPassword = [];

// Write password to the #password input

function writePassword() {
  generatePassword();
  //console.log(generatePassword())
  var passwordText = document.querySelector("#password");

  function randomize() {
    for (var i = 0; i < numberLength.length; i++) {
      var special = math.floor(math.random() * (numberLength.length -1)); i++;
 randomizedPassword.push(passwordCriteria[special])}

  }

  passwordText.value = randomizedPassword;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
 

  //generatePassword()

  //function to include uppercase letters
  function firstPrompt() {
    var firstResponse = confirm("Include special charaters?");
    if (firstResponse == true){
      passwordCriteria.push(specialArr);
    }
  
    //if (firstResponse == false){
    //passwordCriteria.push("no");
    //return secondPrompt()
    //}
  }
  //function to include uppercase letters
  function secondPrompt() {
    var secondResponse = confirm("Include uppercase letters?");
    if (secondResponse == true) {
      passwordCriteria.push(upperCaseArr)
    }
    //if (secondResponse == false) {
      //passwordCriteria.push("no")
    //}

  }
  //function to include numbers
  function thirdPrompt() {
    var thirdResponse = confirm("include numbers?");
    if (thirdResponse == true) {
      passwordCriteria.push(numberArr)
    }

  //function to confirm character count

  function characterCount() {
    var finalResponse = prompt("Please enter character length", "Minimum of 8 characters and a maximum of 120");
    if (finalResponse >= 8 && finalResponse <= 120) {
      var numberLength = finalResponse
      return numberLength
    }
    console.log(numberLength)
  }
  firstPrompt()
  secondPrompt()
  thirdPrompt()
  characterCount()

}
}
