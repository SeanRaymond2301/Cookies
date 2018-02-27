function poundTriangle(x) {
    clearOutput();
    var stringVar = "#";
    for (i = 1; i < x; i++) {
        doOutput(stringVar.repeat(i) + "<br>");
    }
}

function parzival() {
    clearOutput();
    for (i = 1; i < 101; i++) {
        if (!(i % 3) && !(i % 5)) {
            doOutput("Artemis and Parzival" + "<br>");
        } else if (!(i % 3)) {
            doOutput("Art3mis" + "<br>");
        } else if (!(i % 5)) {
            doOutput("Parzival" + "<br>");
        } else {
            doOutput(i + "<br>");
        }
    }
}

function checkerBoard(x, y) {
    clearOutput();
    var x = document.getElementById("x").value,
        y = document.getElementById("y").value,
        stringVar = "#";
    for (i = 0; i < y; i++) {
        for (j = 0; j < x; j++) {
            if (!(i % 2)) {
                doOutput(stringVar + "&nbsp;");
            } else {
                doOutput("&nbsp;" + stringVar);
            }
        }
        doOutput("<br>");
    }
}

function poundDiamond(x) {
    clearOutput();
    if (x % 2) {
        for (i = 1; i <= x; i += 2) {
            console.log("i" + i);
            console.log("(x - i) / 2: " + (x - i) / 2)
            doOutput("&nbsp;".repeat((x - i) / 2) + "#".repeat(i) + "&nbsp;".repeat((x - i) / 2) + "<br>");
        }
        for (j = x; j >= 1; j -= 2) {
            console.log("j" + j);
            console.log("((x + 1) - j) / 2) " + ((x + 1) - j) / 2)
            doOutput("&nbsp;".repeat(Math.ceil(((x + 1) - j) / 2)) + "#".repeat(j - 2) + "&nbsp;".repeat((x - j) / 2) + "<br>");
        }
    } else {
        x++;
        poundDiamond(x);
    }
}

function reversePoundDiamond(x) {
    clearOutput();
    if (x % 2) {
        for (i = 0; i <= x; i += 2) {
            doOutput("#".repeat((x) - i / 2) + "&nbsp;".repeat(i) + "#".repeat((x) - i / 2) + "<br>");
        }
        for (j = x; j >= 0; j -= 2) {
            doOutput("#".repeat((x + 2) - j / 2) + "&nbsp;".repeat(j - 1) + "#".repeat((x) - j / 2) + "<br>");
        }
    } else {
        x--;
        reversePoundDiamond(x);
    }
}

function doOutput(out) {
    document.getElementById("output").innerHTML += out;
}

function clearOutput() {
    document.getElementById("output").innerHTML = "";
}
