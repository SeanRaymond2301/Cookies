function setCookie() {
    var a = prompt("What is your username?", ""),
        b = prompt("What is your password?", "");
    
    document.cookie = "usernamepassword=" + a + ',' + b + ";expires=" + dateThing();
    
    window.location.href = "cookies.html";
}

function dateThing() {
    return new Date().getMilliseconds() * 1000 * 60 * 60 * 24 * 3;
}