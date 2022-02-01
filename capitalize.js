// Capitalize letter
// Write code that takes a string as input and capitalize the first letter of each word. 
// Words will be separated by only one space. i.e. “hello world” should be outputted as “Hello World”

function capitalizeFirstLetterOfEachWord(originalString){
    let newString = ""
    for(let i = 0; i < originalString.length; i++){
        if(i == 0 || originalString[i-1] == " "){
            newString += originalString[i].toUpperCase()
        }
        else{
            newString += originalString[i]
        }
    }
    return newString
}

let testString = "hey party people what's a-happenin'??"
console.log(capitalizeFirstLetterOfEachWord(testString))