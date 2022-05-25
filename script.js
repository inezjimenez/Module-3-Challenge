// Assignment code here
var numberBase = "1234567"
var passwordBase = ""
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword(){
  console.log("Generate password funciton")
  var passwordLength = prompt("How long do you want your password to be")
  console.log(passwordLength)

  var userWantsNumbers = confirm("Do you want numbers in your password")
  console.log(userWantsNumbers)
  // if user say yes to wanting numbers
  if (userWantsNumbers = true){
    passwordBase = passwordBase.concat(numberBase)
  }
  // return passwordLength
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);