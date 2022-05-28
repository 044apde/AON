document.querySelector(".pwd").addEventListener("change", (e) => {
    const pwd = document.querySelector(".pwd").value;
    const pwd2 = document.querySelector(".pwd2").value;
    const checkpwd = document.querySelector(".checkpwd");
    if (pwd.length = 0) {
        checkpwd.textContent = " " + `비밀번호를 입력해주세요.`;
        checkpwd.style.color = "red";
    } else if (pwd.length < 6) {
        checkpwd.textContent = " " + `비밀번호가 6자 미만입니다.`;
        checkpwd.style.color = "red";
    } else {
        checkpwd.textContent = " " + `적절합니다.`;
        checkpwd.style.color = "green";
    }
});
document.querySelector(".pwd2").addEventListener("change", (e) => {
    const pwd = document.querySelector(".pwd").value;
    const pwd2 = document.querySelector(".pwd2").value;
    const checkPwd2 = document.querySelector(".checkPwd2");
    if (pwd2.length < 6) {
        checkPwd2.textContent = " " + `비밀번호가 6자 미만입니다.`;
        checkPwd2.style.color = "red";
    } else if (pwd2 !== pwd) {
        checkPwd2.textContent = " " + `비밀번호가 일치하지 않습니다.`;
        checkPwd2.style.color = "red";
    } else {
        checkPwd2.textContent = " " + `비밀번호가 일치합니다.`;
        checkPwd2.style.color = "green";
    }
});