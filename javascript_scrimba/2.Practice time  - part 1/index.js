// Create two variables, firstName and lastName

// Concatenate the two variables into a third variable called fullName

// Log fullName to the console

let firstName = 'Arnold'
let lastName = 'Shwarz'
let fullName = firstName + ' ' + lastName
console.log('variable', fullName)

//concatenate 2 strings in a function

function conc() {
  let hi = `Hi there, ${firstName}!`
  console.log(hi)
}

conc()

//incrementing and decrementing

let myPoints = 3

function add3points() {
  myPoints += 3
}

function remove1poin() {
  myPoints -= 1
}

add3points()
remove1poin()
add3points()
remove1poin()
add3points()
console.log('sum', myPoints)

//Strings and numbers

console.log("2" + 2) // 22 string
console.log(11 + 7) // 18 number
console.log(6 + "5") // 65 string
console.log("My points: " + 5 + 9) // My points: 59 string
console.log(2 + 2) //  4 number
console.log("11" + "14") //  1114 string

// Rendering an error message

let message = 'Something went wrong'
let errorEl = document.getElementById('error')

function reportError() {
  errorEl.textContent = message
  setTimeout(()=> {
    errorEl.textContent = ''
  }, 5000)
}

// Calculator

let num1 = 8
let num2 = 2
let sum

document.getElementById('num1-el').textContent = num1
document.getElementById('num2-el').textContent = num2
let summary = document.getElementById('sum-el')



function add() {
  sum = num1 + num2
  summary.textContent = 'Sum: ' + sum
}

function substract() {
  sum = num1 - num2
  summary.textContent = 'Sum: ' + sum
}

function divide() {
  sum = num1 / num2
  summary.textContent = 'Sum: ' + sum
}

function multiply() {
  sum = num1 * num2
  summary.textContent = 'Sum: ' + sum
}















