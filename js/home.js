document.querySelector(".boxes.mwm").addEventListener("mouseenter", (e) => {
    const link = document.querySelector(".linkToMWM");
    link.innerHTML = "할래요!";
    link.style.fontSize = "25px";
    link.style.fontWeight = "bolder";
});

document.querySelector(".boxes.mwm").addEventListener("mouseleave", (e) => {
    const link = document.querySelector(".linkToMWM");
    link.innerHTML = "밥 한끼 어때요?";
    link.style.fontSize = "25px";
    link.style.fontWeight = "200";
});