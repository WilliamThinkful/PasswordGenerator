var generateBtn = document.querySelector("#generate");
var lowerCaseArr = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]
var upperCaseArr = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"]
var numbersArr = ["1","2","3","4","5","6","7","8","9","0"]
var specialArr = ["!","@","#","$","%","^","&","*","(",")","_","+","-","=","/","?","."]
var passwordCriteria = [];
var numberLength = 0
var randomizedPassword = []



//generate a new password
function writePassword() {
  //begin prompts
  generatePassword();
 //once prompts are answered, password needs to be randomized based on user inputs
  randomize()
//display randomized password to user
  var passwordText = document.querySelector("#password");
  passwordText.value = randomizedPassword.join("");
}
//based on user input from previous prompts, this function will randomize the data to the user's preferences. 
//a random character will be pulled until the loop is closed. loop length is set by user selected character count.
  function randomize() {
    for (var i = 0; i < numberLength; i++) {
      var special = Math.floor(Math.random() * (passwordCriteria.length - 1));
      //console.log(passwordCriteria)
      randomizedPassword.push(passwordCriteria[special]);
    }
  //console.log("working 2")
  // console.log(passwordCriteria)
  // console.log(randomizedPassword)
  // console.log(numberLength)
  }




// Add event listener to generate button and begin the password generator when clicked.
generateBtn.addEventListener("click", writePassword);


//the function contains all prompts for the user.
function generatePassword(){
    //resetting the variables if the generate button is clicked again.
    passwordCriteria = [];
    numberLength = 0;
    randomizedPassword = [];
  //function to include spec characters
  function firstPrompt() {
    var firstResponse = confirm("Include special charaters?");
    if (firstResponse == true){
     passwordCriteria = passwordCriteria.concat(specialArr)
      //console.log(passwordCriteria)
    }
  }
  //function to include lowercase
  function secondPrompt() {
    var secondResponse = confirm("Include lowercase?");
    if (secondResponse == true){
     passwordCriteria = passwordCriteria.concat(lowerCaseArr)
      //console.log(passwordCriteria)
    }
  }

  //function to include uppercase letters
  function thirdPrompt() {
    var thirdResponse = confirm("Include uppercase letters?");
    if (thirdResponse == true) {
      passwordCriteria = passwordCriteria.concat(upperCaseArr)
      //console.log(passwordCriteria)
    }
  }

  //function to include numbers
  function fourthPrompt() {
    var fourthResponse = confirm("include numbers?");
    if (fourthResponse == true) {
      //passwordCriteria.push(numbersArr)
      passwordCriteria = passwordCriteria.concat(numbersArr)
    
     // console.log(passwordCriteria)
    }
    if (fourthResponse == false && passwordCriteria.length == 0){
      alert("Please choose at least one option");
      return generatePassword();
    }
  }

  //function to confirm character count
  function characterCount() {
    var finalResponse = prompt("Please enter character length", "Minimum of 8 characters and a maximum of 120");
    if (finalResponse >= 8 && finalResponse <= 120) {
      numberLength = finalResponse      
     // console.log(numberLength)
      }
    if (finalResponse < 8 || finalResponse > 120) {
      alert("Please choose a valid response.");
      return characterCount();
    }
  }
  firstPrompt();
  secondPrompt();
  thirdPrompt();
  fourthPrompt();
  characterCount();
  
}



