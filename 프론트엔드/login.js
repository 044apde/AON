function login() {
    const form = document.login_form;
    const chkuname = checkValidUsername(form);
    const chkPsw = checkValidPassword(form);

    if (chkuname) {
        document.getElementById('alert_username').innerText = "";
        form.uname.style.border = '2px solid';
        form.uname.style.borderColor = '#00D000';
    } else {
        form.uname.style.border = '2px solid';
        form.uname.style.borderColor = '#FF0000';
        document.getElementById('alert_username').style.color = '#FF0000';
    }
    if (chkPsw) {
        document.getElementById('alert_password').innerText = "";
        form.psw.style.border = '2px solid';
        form.psw.style.borderColor = '#00D000';
    } else {
        form.psw.style.border = '2px solid';
        form.psw.style.borderColor = '#FF0000';
        document.getElementById('alert_password').style.color = '#FF0000';
    }
    if (chkuname && chkPsw) {
        console.log('complete. form.submit();');
        //form.submit();
    }
}

function checkValidUsername(form) {
    if (form.uname.value == "") {
        document.getElementById('alert_username').innerText = "Please enter username.";
        //form.username.focus();
        return false;
    }

    return true;
}

function checkValidPassword(form) {
    if (form.password.value == "") {
        document.getElementById('alert_password').innerText = "Please enter password.";
        //form.password.focus();
        return false;
    }

    const psw = form.password.value;
    // String.prototype.search() :: 검색된 문자열 중에 첫 번째로 매치되는 것의 인덱스를 반환한다. 찾지 못하면 -1 을 반환한다.
    // number
    const num = psw.search(/[0-9]/g);
    // alphabet
    const eng = psw.search(/[a-z]/ig);
    // special characters
    const spe = psw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

    if (psw.length < 6) {
        // 최소 6문자.
        document.getElementById('alert_password').innerText = "Password must be at least 6 characters.";
        return false;
    } else if (psw.search(/\s/) != -1) {
        // 공백 제거.
        document.getElementById('alert_password').innerText = "Please enter your password without spaces.";
        return false;
    } else if (num < 0 && eng < 0 && spe < 0) {
        // 한글과 같은 문자열 입력 방지.
        document.getElementById('alert_password').innerText = "Password is not valid.";
        return false;
    }

    return true;
}