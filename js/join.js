document.querySelector(".pwd1").addEventListener("change", (e) => {
    const pwd1 = document.querySelector(".pwd1").value;
    const pwd2 = document.querySelector(".pwd2").value;
    const checkPwd1 = document.querySelector(".checkPwd1");
    if (pwd1.length = 0) {
        checkPwd1.textContent = " " + `비밀번호를 입력해주세요.`;
        checkPwd1.style.color = "red";
    } else if (pwd1.length < 6) {
        checkPwd1.textContent = " " + `비밀번호가 6자 미만입니다.`;
        checkPwd1.style.color = "red";
    } else {
        checkPwd1.textContent = " " + `적절합니다.`;
        checkPwd1.style.color = "green";
    }
});
document.querySelector(".pwd2").addEventListener("change", (e) => {
    const pwd1 = document.querySelector(".pwd1").value;
    const pwd2 = document.querySelector(".pwd2").value;
    const checkPwd2 = document.querySelector(".checkPwd2");
    if (pwd2.length < 6) {
        checkPwd2.textContent = " " + `비밀번호가 6자 미만입니다.`;
        checkPwd2.style.color = "red";
    } else if (pwd2 !== pwd1) {
        checkPwd2.textContent = " " + `비밀번호가 일치하지 않습니다.`;
        checkPwd2.style.color = "red";
    } else {
        checkPwd2.textContent = " " + `비밀번호가 일치합니다.`;
        checkPwd2.style.color = "green";
    }
});