console.log('hello world')

//document.getElementById("textarea").

var UserInput = window.prompt("enter your password")

if (UserInput === "12345") {
    console.log("you have logged in as user 1")
    window.location.href = "page.html";
 } else {
    window.alert("Failed to log in")

 } 

function getContent() {
    var content = document.getElementById("textarea").value
    console.log(content)
    window.alert(content) 
}    
