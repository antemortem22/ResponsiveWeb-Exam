function login(event) {
           
    event.preventDefault();

    
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;

   
    if (username === "evelin" && password === "123" || username === "eduardo" && password === "456" ) {
        
        window.location.href = "profesional.html?username=" + encodeURIComponent(username);
    } else {
        alert("Credenciales incorrectas. Por favor, inténtelo de nuevo.");
    }
}