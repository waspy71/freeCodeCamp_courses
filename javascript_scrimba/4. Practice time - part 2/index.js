// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

let person = {
  name: 'John',
  age: 35,
  country: 'USA'
}

function logData() {
  let message = person.name + ' is ' + person.age + ' years old and lives in ' + person.country 
  return console.log(message)
}

logData()
////////////////////////////////////////////////


let age = 67

if( age < 6) {
  console.log('free')
} else if ( age < 18) {
  console.log('child discount')
} else if ( age < 27) {
  console.log('student discount')
} else if( age < 67) {
  console.log('full price')
} else {
  console.log('senior citizen discount')
}

////////////////////////////////////////////////

let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

for( let i = 0; i < largeCountries.length; i++) {
  console.log(largeCountries[i])
}

///////////////////////////
let largeCountries2 = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

largeCountries2.shift()
largeCountries2.unshift('China')
largeCountries2.pop()
largeCountries2.push('Pakistan')

console.log('countries: ', largeCountries2)

///////////////////////////////////////

let dayOfMonth = 13
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&

if(dayOfMonth === 13 && weekday === 'Friday') {
  console.log("IT'S FRIDAY 13th!!!!  :O")
}

/////////////////////////

let hands = ['rock', 'paper', 'scissors']

function rps() {
  return hands[Math.floor(Math.random() * 3)]
}

console.log('RPS game: ', rps())

///////////////////////

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function place() {
  for( let i = 0; i < fruit.length; i++) {
    if(fruit[i] === "🍎") {
      console.log('in for loop')
      appleShelf.textContent += fruit[i]
    } else {
      orangeShelf.textContent += fruit[i]
    }
  }
}

place()
