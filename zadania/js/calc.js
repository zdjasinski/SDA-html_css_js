function sumuj() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;
    let result = document.getElementById("result");

    if (operation === "+") {
        result.innerText = (num1 + num2);
    } else {
        result.innerText = (num1 - num2);
    }
}

document.getElementById("sumBtn").addEventListener('click', sumuj)
