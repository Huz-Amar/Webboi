
function displayText(){
    console.log("Reaching external js file");
    alert("Nigga pls work");
}

function newEntry(){
    var txt;
    var person = prompt("Clearence Level", "");
    if (person == null || person == "") {
        txt = "User cancelled the prompt.";
    } 
    else {
        txt = "Hello " + person + "! How are you today?";
    }
}
