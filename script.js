// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Created arrays of all possible character choices
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var special= ['!','@','#','$','%','&','*','+','=','?','~'];
var lowerCase= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperCase= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];


function questions(){
  

  var isValid=false;
  do{
    var passwordLength = prompt("How long do you want your password to be")
    console.log(passwordLength)

    var askNumbers = confirm("Do you want numbers in your password")
    console.log(askNumbers)

    var askSpecial = confirm("Do you want your password to include lower case letters?");
    console.log(askSpecial)

    var askLowerCase=confirm("Do you want your password to include lower case letters?")
    console.log(askLowerCase)

    var askUpperCase=confirm("Do you want your password to include upper case letters?")
    console.log(askUpperCase)

    var reponses={
      passwordlength:length,
      askNumbers: askNumbers,
      askSpecial: askSpecial,
      askLowerCase: askLowerCase,
      askUpperCase: askUpperCase,
    }
    if((length<8)||(length>8))
    alert("Choose number between 1 and 8");
    else if((!askNumbers)&&(!askLowerCase)&&(!askUpperCase)&&(!askSpecial))
    alert("Must choose at least one type.");
    else
    isValid=true;
  }while(!isValid);
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

  if(passwordOptions.askSpecial=true)
    possibleCombo=possibleCombo.concat(askSpecial)

  

}




 
  // return passwordLength
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