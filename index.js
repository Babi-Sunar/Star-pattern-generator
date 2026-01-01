const patternBox = document.getElementById("pattern");
const codeBox = document.getElementById("code")
//square
function square() {
    let output = "";
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 5; j++) {
            output += " * ";
        }
        output += "<br>";
    }
    let code = `let output = "" ;<br>
            for (let i = 1; i <= 5; i++) {<br>
                &nbsp for (let j = 1; j <= 5; j++) {<br>
                    &nbsp&nbsp&nbsp output += " * ";<br>
                &nbsp&nbsp&nbsp&nbsp}<br>
            output += "&lt;br&gt;";<br>
            }<br>
            output(output);<br>`;
    patternBox.innerHTML = output;
    codeBox.innerHTML = code;
}

// Right angle triangle
function ra_triangle() {
    let output = "";
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= i; j++) {
            output += "*";
        }
        output += "<br>";
    }

    let code = `let output = ""; <br>
        for (let i = 1; i <= 5; i++) { <br>
        &nbspfor (let j = 1; j <= i; j++) {<br>
            &nbsp&nbspoutput += "*";<br>
        }<br>
        output += "&lt;br&gt;";<br>
    }<br>output(output);`
    patternBox.innerHTML = output;
    codeBox.innerHTML = code;
}

//Inverted right angle triangle
function ira_triangle() {
    let output = "";
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 6 - i; j++) {
            output += "*";
        }
        output += "<br>";
    }

    let code = `let output = ""; <br>
        for (let i = 1; i <= 5; i++) { <br>
        &nbspfor (let j = 1; j <=6 - i; j++) {<br>
            &nbsp&nbspoutput += "*";<br>
        }<br>
        output += "&lt;br&gt;";<br>
    }<br>output(output);`
    patternBox.innerHTML = output;
    codeBox.innerHTML = code;
}

//left right angle triangle
function lra_triangle() {
    let output = "";
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 5 - i; j++) {
            output += "&nbsp&nbsp";
        }
        for (let j = 1; j <= i; j++) {
            output += "*";
        }
        output += "<br>";
    }

    let code = `    let output = "";<br>
        for (let i = 1; i <= 5; i++) {<br>
        &nbspfor (let j = 1; j <= 5 - i; j++) {<br>
        &nbsp&nbsp  output += "&nbsp&nbsp";<br>
        }<br>
        &nbspfor (let j = 1; j <= i; j++) {<br>
        &nbsp&nbspoutput +="*";<br>
        }<br>
        output += "&lt;br&gt;";<br>output(output);`
    patternBox.innerHTML = output;
    codeBox.innerHTML = code;
}

//inverted left RA triangle
function ilra_triangle() {
    let output = "";
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= i - 1; j++) {
            output += "&nbsp&nbsp";
        }
        for (let j = 1; j <= 6 - i; j++) {
            output += "*";
        }
        output += "<br>";
    }

    let code = `    let output = "";<br>
        for (let i = 1; i <= 5; i++) {<br>
        &nbspfor (let j = 1; j <= i - 1; j++) {<br>
        &nbsp&nbsp  output += "&nbsp&nbsp";<br>
        }<br>
        &nbspfor (let j = 1; j <= 6 - i; j++) {<br>
        &nbsp&nbspoutput +="*";<br>
        }<br>
        output += "&lt;br&gt;";<br>output(output);`
    patternBox.innerHTML = output;
    codeBox.innerHTML = code;
}

//pyramid
function pyramid() {
    let output = "";
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 6 - i; j++) {
            output += "&nbsp&nbsp";
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            output += "*";
        }
        output += "<br>";
    }

    let code = `    let output = ""; <br>
    for (let i = 1; i <= 5; i++) {<br>
        &nbspfor (let j = 1; j <= 6 - i; j++) {<br>
            &nbsp&nbspoutput += "&nbsp&nbsp";<br>
        &nbsp}<br>
        &nbspfor (let j = 1; j <= 2 * i - 1; j++) {<br>
            &nbsp&nbspoutput += "*";<br>
        &nbsp}<br>
        output += "&lt;br&gt;";<br>
    }output(output); <br>`
    patternBox.innerHTML = output;
    codeBox.innerHTML = code;
}

//inverted-pyramid
function i_pyramid() {
    let output = "";
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= i - 1; j++) {
            output += "&nbsp&nbsp";
        }
        for (let j = 1; j <= 11 - 2 * i; j++) {
            output += "*";
        }
        output += "<br>";
    }

    let code = `    let output = ""; <br>
    for (let i = 1; i <= 5; i++) {<br>
        &nbspfor (let j = 1; j <= i - 1; j++) {<br>
            &nbsp&nbspoutput += "&nbsp&nbsp";<br>
        &nbsp}<br>
        &nbspfor (let j = 1; j <= 11 - 2 * i; j++) {<br>
            &nbsp&nbspoutput += "*";<br>
        &nbsp}<br>
        output += "&lt;br&gt;";<br>
    }output(output); <br>`
    patternBox.innerHTML = output;
    codeBox.innerHTML = code;
}

//diamond
function diamond() {
    let output = "";
    for (let i = 1; i <= 9; i++) {
        if (i <= 5) {
            for (let j = 1; j <= 5 - i; j++) {
                output += "&nbsp&nbsp";
            }
            for (let j = 1; j <= 2 * i - 1; j++) {
                output += "*";
            }
        }
        if (i > 5) {
            for (let j = 1; j <= i - 5; j++) {
                output += "&nbsp&nbsp";
            }
            for (let j = 1; j <= 19 - 2 * i; j++) {
                output += "*";
            }
        }
        output += "<br>";
    }
    let code = `   let output = ""; <br>
    for (let i = 1; i <= 9; i++) {<br>
    if (i <= 5) {<br>
        for (let j = 1; j <= 5 - i; j++) {<br>
            output += "&nbsp&nbsp";}<br>
        for (let j = 1; j <= 2 * i - 1; j++) {<br>
            output += "*";}}<br>
    if (i > 5) {<br>
        for (let j = 1; j <= i - 5; j++) {<br>
            output += "&nbsp&nbsp";}<br>
        for (let j = 1; j <= 19 - 2 * i; j++) {<br>
            output += "*";}}<br>
            output += "&lt;br&gt;";}<br>
    output(output); <br>`

    patternBox.innerHTML = output;
    codeBox.innerHTML = code;
}

//hourglass
function hourglass() {
    let output = "";
    for (let i = 1; i <= 9; i++) {
        if (i <= 5) {
            for (let j = 1; j <= i - 1; j++) {
                output += "&nbsp&nbsp";
            }
            for (let j = 1; j <= 11 - 2 * i; j++) {
                output += "*";
            }
        }
        if (i > 5) {
            for (let j = 1; j <= 9 - i; j++) {
                output += "&nbsp&nbsp";
            }
            for (let j = 1; j <= 2 * i - 9; j++) {
                output += "*";
            }
        }
        output += "<br>";
    }
    let code = `   let output = ""; <br>
    for (let i = 1; i <= 9; i++) {<br>
    if (i <= 5) {<br>
        for (let j = 1; j <= i - 1; j++) {<br>
            output += "&nbsp&nbsp";}<br>
        for (let j = 1; j <= 11 - 2 * i; j++) {<br>
            output += "*";}}<br>
    if (i > 5) {<br>
        for (let j = 1; j <= 9 - i; j++) {<br>
            output += "&nbsp&nbsp";}<br>
        for (let j = 1; j <= 2 * i - 9; j++) {<br>
            output += "*";}}<br>
            output += "&lt;br&gt;";}<br>
    output(output); <br>`

    patternBox.innerHTML = output;
    codeBox.innerHTML = code;
}


//hollow_square
function hollow_square() {
    let output = "";
    for (let i = 1; i <= 5; i++) {
        if (i == 1 || i == 5) {
            for (let j = 1; j <= 5; j++) {
                output += "*";
            }

        }
        if (i > 1 && i < 5) {
            for (let j = 1; j <= 5; j++) {
                if (j == 1 || j == 5) {
                    output += "*";
                }
                if (j > 1 && j < 5) {
                    output += "&nbsp&nbsp";
                }
            }
        }
        output += "<br>";
    }
    let code = `   let output = "";<br>
    for (let i = 1; i <= 5; i++) {<br>
        if (i == 1 || 1== 5) {<br>
            for (let j = 1; j <= 5 ; j++) {<br>
                output += "*";<br>
            }<br>
        }<br>
        if (i > 1 && i < 5) {<br>
            for (let j = 1; j <= 5; j++) {<br>
                if(j == 1|| j ==5){<br>
                    output += "*";<br>
                }
                if(j > 1 && j < 5){<br>
                    output += "&nbsp&nbsp";<br>
                }<br>
            }<br>
        }<br>
        output += "&lt;br&gt;";<br>
    }<br>
    output(output); <br>`

    patternBox.innerHTML = output;
    codeBox.innerHTML = code;
}

//hollow triangle
function hollow_triangle() {
    let output = "";
    function space(a) {
        for (let j = 1; j <= 5 - a; j++) {
            output += "&nbsp&nbsp";
        }
    }
    for (let i = 1; i <= 5; i++) {
        if (i == 1 || i == 5) {
            space(i)
            for (let j = 1; j <= 2 * i - 1; j++) {
                output += "*";
            }
        }
        if (i > 1 && i < 5) {
            space(i);
            output += "*";
            for (let j = 1; j <= 2 * i - 3; j++) {
                output += "&nbsp&nbsp";
            }
            output += "*";
        }
        output += "<br>";
    }

    let code = `    let output = "";<br>
    function space(a) {<br>
        for (let j = 1; j <= 5 - a; j++) {<br>
            output += "&nbsp&nbsp";<br>
        }
    }
    for (let i = 1; i <= 5; i++) {<br>
        if (i == 1 || i == 5) {<br>
            space(i)<br>
            for (let j = 1; j <= 2 * i - 1; j++) {<br>
            output += "*";<br>
        }
        }
        if (i > 1 && i < 5) {<br>
            space(i);<br>
            output += "*";<br>
            for (let j = 1; j <= 2 * i - 3; j++) {<br>
                output += "&nbsp&nbsp";<br>
            }<br>
            output += "*";
        }<br>
        output += "&lt;br&gt;";<br>
    }<br>document.write("output);<br>`

    patternBox.innerHTML = output;
    codeBox.innerHTML = code;
}

//hollow diamond

function hollow_diamond() {
    let output = "";
    for (let i = 1; i <= 9; i++) {
        if (i == 1 || i == 9) {
            for (let j = 1; j <= 4; j++) {
                output += "&nbsp&nbsp";
            }
            output += "*";
        }
        if (i >= 2 && i <= 5) {
            for (let j = 1; j <= 5 - i; j++) {
                output += "&nbsp&nbsp";
            }
            output += "*";
            for (let j = 1; j <= 2 * i - 3; j++) {
                output += "&nbsp&nbsp";
            }
            output += "*";
        }
        if (i >= 6 && i <= 8) {
            for (let j = 1; j <= i - 5; j++) {
                output += "&nbsp&nbsp";
            }
            output += "*";
            for (let j = 1; j <= 17 - 2 * i; j++) {
                output += "&nbsp&nbsp";
            }
            output += "*";
        }
        output += "<br>";
    }
    patternBox.innerHTML = output;
    codeBox.innerHTML = `    let output = "";<br>
    for (let i = 1; i <= 9; i++) {<br>
        if (i == 1 || i == 9) {<br>
            for (let j = 1; j <= 4; j++) {<br>
                output += "&nbsp&nbsp";<br>
            }<br>
            output += "*";
        }<br>
        if (i >= 2 && i <= 5) {<br>
            for (let j = 1; j <= 5 - i; j++) {<br>
                output += "&nbsp&nbsp";
            }<br>
            output += "*";<br>
            for (let j = 1; j <= 2 * i - 3; j++) {<br>
                output += "&nbsp&nbsp";
            }<br>
            output += "*";
        }<br>
        if (i >= 6 && i <= 8) {<br>
            for (let j = 1; j <= i - 5; j++) {<br>
                output += "&nbsp&nbsp";<br>
            }
            output += "*";<br>
            for (let j = 1; j <= 17 - 2 * i; j++) {<br>
                output += "&nbsp&nbsp";
            }<br>
            output += "*";
        }<br>
        output += "&lt;br&gt;";<br>
    }<br>document.write("output);<br>`
    codeBox.style.fontSize = "1.6vw ";
}

function num_pyramid() {
    let output = "";
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 5 - i; j++) {
            output += "&nbsp&nbsp";
        }
        for (let j = 1; j <= i; j++) {
            output += j;
        }
        for (let j = i - 1; j >= 1; j--) {
            output += j;
        }
        output += "<br>";
    }

    let code = `    let output = "";<br>
    for (let i = 1; i <= 5; i++) {<br>
        for (let j = 1; j <= 5 - i; j++) {<br>
            output += "&nbsp&nbsp";<br>
        }<br>
        for (let j = 1; j <= i; j++) {<br>
            output += j;<br>
        }<br>
        for (let j = i - 1; j >= 1; j--) {<br>
            output += j;<br>
        }<br>
        output += "&lt;br&gt;" ;<br>
    }<br>document.writeln(output);`;

    patternBox.innerHTML = output;
    codeBox.style.fontSize = "2vw ";
    codeBox.innerHTML = code;

}
function star_with_space() {
    let output = "";
    for (let i = 1; i <= 5; i++) {
    if (i == 5) {
        for (let j = 1; j <= 9; j++) {
            output += "*";
        }
    }
    else {
        for (let j = 1; j <= i; j++) {
            output += "*";
        }
        for (let j = 1; j <= 9 - 2 * i; j++) {
            output += "&nbsp&nbsp";
        }
        for (let j = 1; j <= i; j++) {
            output += "*";
        }
    }
    output += "<br>";
}
let code = `    let output = "";<br>
    for (let i = 1; i <= 5; i++) {<br>
    if (i == 5) {<br>
        for (let j = 1; j <= 9; j++) {<br>
            output += "*";<br>
        }<br>
    }<br>
    else {<br>
        for (let j = 1; j <= i; j++) {<br>
            output += "*";<br>
        }<br>
        for (let j = 1; j <= 9 - 2 * i; j++) {<br>
            output += "<br>";<br>
        }<br>
        for (let j = 1; j <= i; j++) {<br>
            output += "*";<br>
        }<br>
    }<br>
    output += "";<br>
}<br>document.writeln(output);`
    patternBox.innerHTML = output;
    codeBox.style.fontSize = "1.7vw ";
    codeBox.innerHTML = code;
}