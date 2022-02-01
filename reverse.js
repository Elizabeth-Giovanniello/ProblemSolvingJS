// Problems to solve using JavaScript
// Reverse a string
// Write code that takes a string as input and returns the string reversed
// i.e. “Hello” will be returned as “olleH”

function reverseString(originalString){
    var newString = ""
    for(let i = originalString.length; i > 0; i--){
        newString += originalString[i-1];
    }
    return newString
}
var backwards_test = reverseString("Hello")
console.log(backwards_test)

