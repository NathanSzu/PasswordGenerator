// Assignment Code
var generateBtn = document.querySelector("#generate");
var arr = []
var pass = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// ON BUTTON CLICK
// Need a function to initiate the password generation code.


function generatePassword() {

// PROMPTED TO CHOOSE PASSOWRD LENGTH
// Prompt to allow a user to input a number from 8-128.
// If else (if number is less than 8 or greater than 128, alert "Password must be between 8 and 128 characters.").
// Else store number in VAR then continue with prompts.


  var passLength = prompt("Enter a password length from 8 - 128");

  if(passLength < 8 || passLength > 128) {
    alert("Password length must be between 8 and 128!");
  
  }
  else if(passLength > 7 && passLength < 129) {
  
  // PROMPTED TO INCLUDE LOWERCASE LETTERS
  // Prompt to allow a user to confirm the use of lowercase letters.
  // If else (if true then add lowercase letters to array options).
  // Else skip and continue with prompts.
  
    var lowerCase = confirm("Use lowercase letters?")
  
    if(lowerCase) {
        arr.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z")
    }
  
  // PROMPTED TO INCLUDE UPPERCASE LETTERS
  // Prompt to allow a user to confirm the use of uppercase letters.
  // If else (if true then add uppercase letters to array options).
  // Else skip and continue with prompts.
    
    var upperCase = confirm("Use uppercase letters?")
    
    if(upperCase) {
        arr.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z")
    }    
  
  // PROMPTED TO INCLUDE NUMBERS
  // Prompt to allow a user to confirm the use of numbers.
  // If else (if true then add numbers to array options).
  // Else skip and continue with prompts.
  
    var number = confirm("Use numbers?")
  
    if(number) {
      arr.push(0,1,2,3,4,5,6,7,8,9)
    }    
  
  // PROMPTED TO INCLUDE SPECIAL CHARACTERS
  // Prompt to allow a user to confirm the use of special characters.
  // If else (if true then add special characters to array options).
  // Else skip and continue to validation.
  
    var special = confirm("Use special characters?")
      
    if(special) {
        arr.push("!","#","$","%","&","'","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","}","~")
    }    
    
    console.log(arr)
  
  // INPUTS ARE VALIDATED TO ENSURE THAT AT LEAST ONE OPTION IS CHOSEN
  // If else (if no options are selected, alert "please choose at least one" then reload page).
  // Else continue to generate and write password.
    
    if(!lowerCase && !upperCase && !number && !special) {
      alert("You must choose at least one option!");
      window.location = window.location;
    }
    else {
  
      for(i=0 ; i < passLength ; i++) {
        pass.push(arr[Math.floor(Math.random()*arr.length)]);
        
      }

      return pass.join("");

    }
  }
  else {
    alert("You must type a number!");
  }
}

// PASSWORD IS GENERATED USING THE PRESELECTED CRITERIA
// Password is generated in length VAR from the array built from numbers, letters, and characters selected.

// PASSWORD IS WRITTEN TO PAGE
