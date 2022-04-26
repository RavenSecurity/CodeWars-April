// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}.
// Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
// What is considered Valid?

// A string of braces is considered valid if all braces are matched with the correct brace.

function validBraces(braces){
    let opening = [ '(', '[', '{']
      let closing = [ ')', ']', '}']
      let arr = []
      for (let i = 0; i < braces.length; i++) {
          if (opening.includes(braces[i])) {
              arr.push(braces[i])
          } else
          if (closing.indexOf(braces[i]) === opening.indexOf(arr[arr.length - 1])) {
              arr.pop()
          } else return false
      } return arr.length === 0;
  }