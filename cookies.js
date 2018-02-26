function getCookie() {
    var cookie = document.cookie = "username=" + document.getElementById("in1").value,
        cookie2 = document.cookie = "password=" + document.getElementById("in2").value;
    spliceCookie(cookie, cookie2);
}

function spliceCookie(cookie, cookie2) {
    cookie = cookie.split("=")[1].trim();
    cookie2 = cookie2.split("=")[1].trim();
    console.log(cookie);
    console.log(cookie2);
    checkCookie(cookie, cookie2);
    return cookie + cookie2;
}

function checkCookie(cookie, cookie2) {
    if(!(cookie == "sean")) {
        return;
    }
    
     if (!(cookie2 == "sean")) {
        return;
    }
    window.location.href = "JSExercise-4/HTML.html";
}