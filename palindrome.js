// BONUS CHALLENGE: Palindrome
// A word, phrase, or sequence that reads the same backward as forward i.e. madam
// Write code that takes a user input and checks to see if it is a Palindrome and reports the result

function reverseString(originalString){
    var newString = ""
    for(let i = originalString.length; i > 0; i--){
        newString += originalString[i-1];
    }
    return newString
}

function removeNonLetters(originalString){
    var newString = ""
    var letters = "abcdefghijklmnopqrstuvwxyz"
    originalString = originalString.toLowerCase()
    for(let i = 0; i < originalString.length; i++){
        if(letters.includes(originalString[i])){
            newString += originalString[i];
        }
    }
    return newString
}

function palindromeChecker(originalString){
    originalString = removeNonLetters(originalString)
    if(originalString == reverseString(originalString)){
        return true
    }
    else{
        return false
    }
}

testPalindrome = "A man, a plan, a canal: Panama"
console.log(palindromeChecker(testPalindrome))