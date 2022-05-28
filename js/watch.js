function autoSizeTextArea() {
    const text = document.querySelector('textarea');
    const rows = text.value.split("\n").length;
    if (rows < 3) {
        text.rows = 4;
    } else if (rows > 15) {
        text.rows = rows + 3;
    } else {
        text.rows = rows + 1;
    }
}

autoSizeTextArea();