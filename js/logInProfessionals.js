function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var username = getParameterByName('username');

if (username) {
    username = username.charAt(0).toUpperCase() + username.slice(1);
    document.getElementById("welcomeMessage").textContent = "¡Bienvenido/a, " + username + "!";
} else {
    
    window.location.href = "../index.html";
}