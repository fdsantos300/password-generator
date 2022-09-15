const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
  "/"
];

let password = ""
let passwordOne = document.querySelector(".pwd-one")
let passwordTwo = document.querySelector(".pwd-two")
let passLength = document.querySelector(".pwd-length")

// Generate combination from length input
function genCombination(length) {
  password = ""
  for (let i = 0; i < length; i++) {
    let passwordIndex = Math.floor(Math.random() * characters.length)
    password += characters[passwordIndex]
  }
  return password
}

// Placing corresponding combinations to each field
function generatePass() {
  passwordOne.value = genCombination(passLength.value)
  passwordTwo.value = genCombination(passLength.value)
}

// Create a function to copy to clipboard and alert copied text
function copyText(element) {

  element.focus();
  navigator.clipboard.writeText(element.value);
  alert("Copied: " + element.value)
}

// Add event to copy text from desired field
passwordOne.addEventListener("click", function() {
  copyText(passwordOne)
})

passwordTwo.addEventListener("click", function() {
  copyText(passwordTwo)
})


let checkbox = document.getElementById("checkbox")

function darkmode() {
  document.body.classList.add("dark-mode")
}

function nodark() {
  document.body.classList.remove("dark-mode")
}

checkbox.addEventListener("change", function() {
  if (checkbox.checked) {
    darkmode();
  } else {
    nodark();
  }
})
