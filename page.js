
var usernameInput = document.getElementById("b1");
var passwordInput = document.getElementById("b2");
var loginButton = document.getElementById("b4");
loginButton.addEventListener("click", function (event) {
        
    event.preventDefault();
         
    localStorage.setItem("username", usernameInput.value);  
    window.location.href = "index.html";
});
