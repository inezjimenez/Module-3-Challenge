// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


//Created arrays of all possible character choices
var passwordLength=0;
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var special= ['!','@','#','$','%','&','*','+','=','?','~'];
var lowerCase= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperCase= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var allCharacters= [] 
var finalPassword=""

console.log(passwordLength);
console.log(numbers);
console.log(special);
console.log(lowerCase);
console.log(upperCase);



//   while(passwordLength<8||passwordLength>=8){
//     passwordLength=prompt("How many characters do you want your password to be? Passworod must be between 1 and 8 characters.")

//     if( passwordLength>8){
//       alert("Password must be between 1 and 8 characters.")
//   }
//   else {
//     showPrompts();

//     while (passwordCriteria.passwordLength<passwordLength){

//       if (lowerCase===false && upperCase===false && numbers===false && special===false){
//         alert("You must select at least one criteria of lowercase,uppercase,numbers or special characters.")
//         showPrompts();
//       }
//       else{

//       }
//     }
//   }

//   return responses;
// }

function usersChoice(){
  // var passwordOptions=questions();
  // var possibleCombo=[];
  // var finalPassword="";
  var passwordLength= parseInt(
    prompt("How many characters will your password have?")
    )
    console.log(passwordLength)

  var numbers= confirm(
    "Do you want numbers in your password?"
  )

  var passwordChoices = {
    passLength: passwordLength,
    numChoice: numbers,
    usersSpecial: special,
    usersLowerCase: lowerCase,
    usersUperCase: upperCase,

  }
  console.log(passwordChoices)


return passwordChoices;
}

function generatePassword(){
  var usersPassword= usersChoice()

  if (usersPassword.numChoice){
    allCharacters= allCharacters.concat(numbers)
    console.log(allCharacters)
  }

  if (usersPassword.usersSpecial){
    allCharacters=allCharacters.concat(special)
    console.log(allCharacters)
  }

  if(usersPassword.usersLowerCase){
    allCharacters=allCharacters.concat(lowerCase)
    console.log(lowerCase)
  }

  if(usersPassword.usersUperCase){
    allCharacters=allCharacters.concat(upperCase)
    console.log(upperCase)
  }

  if(usersPassword.)








  for (var i=0;i<usersPassword.passLength;i++){
    finalPassword+= allCharacters[Math.floor(Math.random() * allCharacters.length)];
    console.log(finalPassword)
  }



return finalPassword
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