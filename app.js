function calc(sign){
    let son1 = Number(document.getElementById("num1").value);
    let son2 = Number(document.getElementById("num2").value);
    let result;

    if (sign == "+") {
        result = son1 + son2;
    } else if (sign == "-") {
        result = son1 - son2;
    } else if (sign == "*") {
        result = son1 * son2;
    } else if (sign == "/") {
        result = son1 / son2;
    } else if (sign == "^") {
        result = Math.pow(son1, son2);
    } else if (sign == "%") {
        result = (son1 / 100) * son2;
    } else if (sign == "max") {
        result = Math.max(son1, son2);
    } else if (sign == "min") {
        result = Math.min(son1, son2);
    } else if (sign == "ildiz") {
        result = Math.pow(son1, 1/son2);
    }

    document.getElementById('res').innerHTML = "Result: " + result;
}

function clr(){
    let nullable = "";
    document.getElementById("num1").value = nullable;
    document.getElementById("num2").value = nullable;
    document.getElementById("res").innerHTML = "Result: ";
}