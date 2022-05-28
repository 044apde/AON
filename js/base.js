function underlineBoard() {
    const url = window.location.href;
    const home = document.querySelector(".E.home");
    const mwm = document.querySelector(".E.MWM");
    const board = document.querySelector(".dropbtn");
    if (url.match(/^.*board.*/)) {
        board.style.textDecoration = "underline";
        board.style.textUnderlinePosition = "under";
    } else if (url.match(/^.*mwm.*/)) {
        mwm.style.textDecoration = "underline";
        mwm.style.textUnderlinePosition = "under";
    } else if (url.match(/^.*proflie.*/)) {
        console.log("Profile");
    } else if (url.match(/^.*search.*/)) {
        console.log("search");
    } else {
        home.style.textDecoration = "underline";
        home.style.textUnderlinePosition = "under";
    }
};

underlineBoard();