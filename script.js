// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordCriteria={
//Created arrays of all possible character choices
length=0;
numbers = ['0','1','2','3','4','5','6','7','8','9'];
special= ['!','@','#','$','%','&','*','+','=','?','~'];
lowerCase= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
upperCase= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
}

console.log(length);
console.log(numbers);
console.log(special);
console.log(lowerCase);
console.log(upperCase);

function writePassword(){

  var password=generatePassword();

  var passwordText=document.querySelector("#password");

  passwordText.value-password;
}

function generatePassword(){
  var result=""
  var length=0;
  var numbers;
  var special;
  var loerCase;
  var upperCase;

  return responses;
}

function generatePassword(){
  var passwordOptions=questions();
  var possibleCombo=[];
  var finalPassword="";



  // if user say yes to wanting numbers
  if (passwordOptions.askNumbers= true){
    possibleCombo = possibleCombo.concat(askNumbers)
  }

  //if user says yes to wanting special characters
  if(passwordOptions.askSpecial=true){
    possibleCombo=possibleCombo.concat(askSpecial)
  }

  //if user says yes to wanting lowercase letters
  if(passwordOptions.askLowerCase=true){
    possibleCombo=possibleCombo.concat(askLowerCase)
  }

  //if user says yes to wanting uppercase letters
  if(passwordOptions.askUpperCase=true){
    possibleCombo=possibleCombo.concat(askUpperCase)
  }

  console.log(possibleCombo);

  for(var i=0;i<passwordOptions.length;i++){
    finalPassword+=possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
  }
  console.log(finalPassword);

  // return passwordLength
  return finalPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
console.log("Generate password funciton")
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);