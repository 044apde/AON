const checkPwd = document.querySelector(".checkPwd");
const checkPwd2 = document.querySelector(".checkPwd2");
const pwd = document.querySelector(".pwd");
const pwd2 = document.querySelector(".pwd2");

const checkingPwd = () => {
    const pwdValue = document.querySelector(".pwd").value;
    if (pwdValue.length < 6) {
        checkPwd.innerText = " 6자 이하입니다.";
        checkPwd.style.color = "red";
    } else {
        checkPwd.innerText = " 적절합니다.";
        checkPwd.style.color = "green";
    }
}
const checkingPwd2 = () => {
    const pwdValue = document.querySelector(".pwd").value;
    const pwdValue2 = document.querySelector(".pwd2").value;
    if (pwdValue !== pwdValue2) {
        checkPwd2.innerText = " 비밀번호가 서로 일치하지 않습니다.";
        checkPwd2.style.color = "red";
    } else if (pwdValue2.length < 6) {
        checkPwd2.innerText = " 6자 이하입니다.";
        checkPwd2.style.color = "red";
    } else {
        checkPwd2.innerText = " 적절합니다.";
        checkPwd2.style.color = "green";
    }
}

pwd.addEventListener("input", checkingPwd);
pwd2.addEventListener("input", checkingPwd2);