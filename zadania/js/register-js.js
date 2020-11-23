function register(event) {
    event.preventDefault();

    const emailId = 'email';
    const pswId = 'psw';
    const pswRepeatId = 'psw-repeat';

    if (isFormValid(emailId, pswId, pswRepeatId)) {
        const request = {
            email: document.getElementById(emailId).value,
            password: document.getElementById(pswId).value,
            sex: document.querySelectorAll("input[type='radio'][name='sex']:checked")[0].value,
            age: document.getElementById("age").value

        };
        console.log(request);
        //sendRequest(request);
    }
}

function isFormValid(emailId, pswId, pswRepeatId) {
    return checkRequired([emailId, pswId, pswRepeatId]) && checkPassword(pswId, pswRepeatId)
}

function checkRequired(selectors) {
    let isValid = true;

    selectors.forEach(selector => {
        const element = document.getElementById(selector);
        const validationMsg = document.getElementById(selector + "_validation");

        validationMsg.innerText = '';

        if (!element.value) {
            validationMsg.innerText = "Pole jest wymagane!";
            isValid = false;
        }
    });

    return isValid;
}

function checkPassword(pswId, pswRepeatId) {
    let isValid = true;
    const validationMsg = document.getElementById(pswRepeatId + "_validation");
    validationMsg.innerText = '';

    const psw = document.getElementById(pswId).value;
    const pswRepeat = document.getElementById(pswRepeatId).value;

    if (psw !== pswRepeat) {
        validationMsg.innerText = 'Hasła muszą być takie same!';
        isValid = false;
    }

    return isValid;
}

function toogleButtonActivity() {
    const btn = document.getElementById("submit-btn");

    if (btn.disabled) {
        btn.removeAttribute("disabled");
    } else {
        btn.setAttribute("disabled", "true");
    }
}