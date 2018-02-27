function getCookie() {
    //setCookie();
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
    //Split the cookie into its properties
    var cookieProperties = cookie.split(";");
    var returnArray = new Array(2);
    //Iterate through all properties checking for the username and password properties and set the array accordingly
    for (let i = 0; i < cookieProperties.length - 1; i++) {
        var splitProperty = cookieProperties[i].split("=");
        if (splitProperty[0] == "username")
            //Return the value of the username
            returnArray[0] = splitProperty[1];
        if (splitProperty[0] == "password")
            //Return the value of the username
            returnArray[1] = splitProperty[1];
    }
    
    return returnArray;
}


//Will return false if user is not valid and true if user is valid
function checkUser(username, password) {
    console.log(username, password);
    if(!(username == document.getElementById("username").value)) {
        return false;
    }
    if(!(password == document.getElementById("password").value)) {
        return false;
    }
    
    return true;
}

//window.location.href = "JSExercise-4/HTML.html";