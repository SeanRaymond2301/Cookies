function getCookie() {
    //Check if there are any cookies, and if not, prompt the user for them
    if (!document.cookie) {
        window.location.href = "createcookies.html";
    }
    //We get the cookie     
    var cookie = decodeURIComponent(document.cookie);
    //We extract the username and password from it
    var userInfo = spliceCookie(cookie);
    var isValidUser = checkUser(userInfo[0], userInfo[1]);
    if (isValidUser)
        window.location.href = "JSExercise-4/HTML.html";
    else {
        alert("incorrect");
    }
}

//Returns a two element array. Array element 0 contains username, and 1 contains password
function spliceCookie(cookie) {
    //Get the property value, then split it by the comma, which separates the password and username
    var returnArray = cookie.split("=")[1].split(",");
    return returnArray;
}


//Will return false if user is not valid and true if user is valid
function checkUser(username, password) {
    //Check the username
    if(username != document.getElementById("username").value)
        return false;
    //Check the password
    if(password != document.getElementById("password").value)
        return false;
    
    return true;
}

//window.location.href = "JSExercise-4/HTML.html";