/**
 * EJERCICIOS DE count-to-six.js
 * Responsable: Andrea Servin
 */

// EJERCICIO 1
//console.log("HELLO ES6")

//EJERCICIO 2
/*
console.log(`Hello, ${process.argv[2]}!
Your name lowercased is "${process.argv[2].toLowerCase()}".`)
*/

//EJERCICIO 3
/*
let inputs = process.argv.slice(2)
let result = inputs.map(word =>  word.charAt(0))
console.log(`[${inputs.toString()}] becomes "${result.join("")}"`)
*/

//EJERCICIO 4
/*
var foot = {
  kick: function () {
    this.yelp = 'Ouch!'
    setImmediate(() => {
      console.log(this.yelp)
    })
  },
}
foot.kick()
*/

//EJERCICIO 5
/*
let [ ,username, email] = process.argv.slice(2)
console.log({ username, email })
*/

// EJERCICIO 6
/*
let numbers = process.argv.slice(2)
console.log(`The minimum of [${numbers}] is ${Math.min(...numbers)}`)
*/

// EJERCICIO 7
/*
module.exports = function average(...numbers) {
  const sum = numbers.reduce((last, num) => {
    return last + num
  }, 0)
  return sum / numbers.length
}
*/

// EJERCICIO 8
/*
module.exports = function midpoint (lower = 0, upper = 1) {
    return (lower + upper) / 2
}
*/

// EJERCICIO 9
/*
module.exports = (text, exclamation = text.length) => {
    return text + '!'.repeat(exclamation)
}
*/

// EJERCICIO 10
/*
const inputName = process.argv[2];
const inputMessage = process.argv[3];

function html(...args) {
  const [str, username, comment] = args
  const escaped = comment
    .replace(/&/g, '&amp;')
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  return str[0] + username + str[1] + escaped + str[2]
}

console.log(html`<b>${inputName} says</b>: "${inputMessage}"`)
*/

// EJERCICIO PLUS DE https://leetcode.com/problems/two-sum/
/*
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    let aux = i + 1
    while (aux < nums.length) {
      if (nums[i] + nums[aux] == target) {
        return [i, aux]
      }
      ++aux
    }
  }
  return []
}
*/