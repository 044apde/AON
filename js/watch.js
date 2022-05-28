function autoSizeTextArea() {
    const text = document.querySelector('textarea');
    const rows = text.value.split("\n").length;
    if (rows < 2) {
        text.rows = 2;
    } else if (rows > 15) {
        text.rows = rows + 2;
    } else {
        text.rows = rows + 1;
    }
}

autoSizeTextArea();