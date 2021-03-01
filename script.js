// Assignment Code
var generateBtn = document.querySelector("#generate");
//var lowerCaseArr = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]
var upperCaseArr = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]
var numbersArr = ["1","2","3","4","5","6","7","8","9","0"]
var specialArr = ["!","@","#","$","%","^","&","*","(",")","_","+","-","=","/","?","."]
var passwordCriteria = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var numberLength = 0
var randomizedPassword = [];

// Write password to the #password input

function writePassword() {
  generatePassword();
 console.log(numberLength)
  randomize()
  console.log("working 1")
  var passwordText = document.querySelector("#password");

  function randomize() {
    for (var i = 0; i < numberLength; i++) {
      var special = Math.floor(Math.random() * (numberLength-1));// i++;
      randomizedPassword.push(passwordCriteria[special])}
  console.log("working 2")
  console.log(passwordCriteria)
  console.log(randomizedPassword)
  console.log(numberLength)

  passwordText.value = randomizedPassword;
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
 

  //generatePassword()

  //function to include spec characters
  function firstPrompt() {
    var firstResponse = confirm("Include special charaters?");
    if (firstResponse == true){
      //passwordCriteria.push(specialArr);
     passwordCriteria = passwordCriteria.concat(specialArr)
      console.log(passwordCriteria)
    }
  }

  //function to include uppercase letters
  function secondPrompt() {
    var secondResponse = confirm("Include uppercase letters?");
    if (secondResponse == true) {
      //passwordCriteria.push(upperCaseArr)
      passwordCriteria = passwordCriteria.concat(upperCaseArr)
      console.log(passwordCriteria)
    }
  }

  //function to include numbers
  function thirdPrompt() {
    var thirdResponse = confirm("include numbers?");
    if (thirdResponse == true) {
      //passwordCriteria.push(numbersArr)
      passwordCriteria = passwordCriteria.concat(numbersArr)
    
      console.log(passwordCriteria)
    }
  }

  //function to confirm character count
  function characterCount() {
    var finalResponse = prompt("Please enter character length", "Minimum of 8 characters and a maximum of 120");
    if (finalResponse >= 8 && finalResponse <= 120) {
      numberLength = finalResponse
      
      console.log(numberLength)
      //return numberLength
    }
    
  }
  firstPrompt()
  secondPrompt()
  thirdPrompt()
  characterCount()
  
}

console.log("working count")
console.log(numberLength)
console.log("working count")

