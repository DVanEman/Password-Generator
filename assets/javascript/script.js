// Assignment code here
console.clear();
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function generatePassword() {
  var length = window.prompt("How many characters do you want your password to have?");
  console.log(length);
  var questions = [
    {
      question: 'Would you like your password to use numbers?'
    },
    {
      question: 'Would you like your password to use lowercase letters?'
    },
    {
      question: 'Would you like your password to use uppercase letters?'
    },
    {
      question: 'Would you like your password to use special characters?'
    },
  ];
  if (length < 8 || length > 128 || isNaN(length)) {
    window.alert("Your password needs to have between 8 and 128 characters");
    console.log("Please try again!")
  } else {
    var numbers = confirm(questions[0].question);
    if (numbers === false) {
      console.log('No Numbers');
    } else {
      console.log('Numbers');
    }
    var lowercase = confirm(questions[1].question);
    if (lowercase === false) {
      console.log('No Lowercase');
    } else {
      console.log('Lowercase');
    }
    var uppercase = confirm(questions[2].question);
    if (uppercase === false) {
      console.log('No Uppercase');
    } else {
      console.log('Uppercase');
    }
    var special = confirm(questions[3].question);
    if (special === false) {
      console.log('No Special Characters');
    } else {
      console.log('Special Characters');
    }
    var characterSets = [
      {value: numbers, char: "0123456789"},
      {value: lowercase, char: "abcdefghijklmnopqrstuvwxyz"},
      {value: uppercase, char: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"},
      {value: special, char: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"},
    ];
    if (numbers === false && lowercase === false && uppercase === false && special === false) {
      alert('You need to select at least one character type!');
      console.log("Please try again!");
    } else {
      var charset = "";
      for (var i = 0; i < characterSets.length; i++) {
        if (characterSets[i].value === true) {
          charset += characterSets[i].char;
        }
      }
      var passGen = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        passGen += charset.charAt(Math.floor(Math.random() * n));
      }  
      return passGen;
    }    
  }
}
function writePassword() {
  var password = generatePassword();
  if (password === undefined) {
    var passwordText = document.querySelector("#password");
    passwordText.value = "Please try again!";
  } else {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log("Congradulations on your new password!");
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);