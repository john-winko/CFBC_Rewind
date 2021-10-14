// Get the string from the page
// controller function
function getValues() {
    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);
    displayString(revString);
}

// Reverse the string
// logic function
function reverseString(userString) {
    let revString = "";
    for (let index = userString.length -1; index >= 0; index--){
        revString += userString[index];     
    } 
    return revString;
}

// Display the reversed string to screen
// view function
function displayString(revString) {
    document.getElementById("message").innerHTML = `<p>Your reversed string is: ${revString}</p>`;
    document.getElementById("alert").classList.remove("invisible");    
}