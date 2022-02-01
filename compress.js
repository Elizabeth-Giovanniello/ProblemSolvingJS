// Compress a string of characters
// For example, an input of "aaabbbbbccccaacccbbbaaabbbaaa" would compress to "3a5b4c2a3c3b3a3b3a"

function compressStringOfLetters(originalString){
    let counter = 0
    let newString = ""
    for(let i=0; i < originalString.length; i++){
        if(i == 0 || originalString[i] == originalString[i - 1]){
            counter += 1;
        }
        else{
            newString += counter + originalString[i-1];
            counter = 1;
        }
    }
    newString += counter + originalString[originalString.length - 1];
    return newString
}

let testString = "aaabbbbbccccaacccbbbaaabbbaaa";
console.log(compressStringOfLetters(testString));