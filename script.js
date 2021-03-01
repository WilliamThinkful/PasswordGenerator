// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseArr = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]
var upperCaseArr = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]
var numbersArr = ["1","2","3","4","5","6","7","8","9","0"]
var specialArr = ["!","@","#","$","%","^","&","*","(",")","_","+","-","=","/","?","."]
var passwordCriteria = [];
var numberLength;
var randomizedPassword = [];

// Write password to the #password input

function writePassword() {
  generatePassword();
 console.log(numberLength)
  randomize()
  console.log("working 1")
  var passwordText = document.querySelector("#password");

  function randomize() {
    for (var i = 0; i < numberLength.length; i++) {
      var special = math.floor(math.random() * (numberLength.length -1)); i++;
      randomizedPassword.push(passwordCriteria[special])}
  console.log("working 2")
  
  console.log(numberLength)

  passwordText.value = randomizedPassword;
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
 

  //generatePassword()

  //function to include uppercase letters
  function firstPrompt() {
    var firstResponse = confirm("Include special charaters?");
    if (firstResponse == true){
      //passwordCriteria.push(specialArr);
      passwordCriteria.concat(specialArr)
      console.log(passwordCriteria)
    }
  }

  //function to include uppercase letters
  function secondPrompt() {
    var secondResponse = confirm("Include uppercase letters?");
    if (secondResponse == true) {
      passwordCriteria.push(upperCaseArr)
    }
  }

  //function to include numbers
  function thirdPrompt() {
    var thirdResponse = confirm("include numbers?");
    if (thirdResponse == true) {
      passwordCriteria.push(numbersArr)
      console.log("working 3")
    }
  }

  //function to confirm character count
  function characterCount() {
    var finalResponse = prompt("Please enter character length", "Minimum of 8 characters and a maximum of 120");
    if (finalResponse >= 8 && finalResponse <= 120) {
      var numberLength = finalResponse
      
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

