function func() {
    var num = document.getElementById("num").value
    for (i = 0; i < num; i++) {
        document.getElementById("input1").innerHTML += "<div class = 'red1'></div>"
    }
    for (j = 0; j < num; j++) {
        document.getElementById("input2").innerHTML += "<div class = 'green1'></div>"
    }
    for (k = 0; k < num; k++) {
        document.getElementById("input3").innerHTML += "<div class = 'blue1'></div>"
    }
}

    function funct(){
    var a1111 = +document.querySelector("#timeout1").value;
    var sec1 = a1111 * 1000;
    var a2222 = +document.querySelector("#timeout2").value;
    var sec2 = sec1 + a2222 * 1000;
    var a3333 = +document.querySelector("#timeout3").value;
    var sec3 = sec2 + a3333 * 1000;
    $("#input1").delay(sec1).fadeOut(500);
    $('#input2').delay(sec2).fadeOut(500);
    $('#input3').delay(sec3).fadeOut(500);
}
