function autoSizeTextArea() {
    const text = document.querySelector('textarea');
    console.log(text.value);
    const rows = text.value.split("\n").length;
    console.log(rows);
    if (rows < 3) {
        text.rows = 4;
    } else {
        text.rows = rows + 2;
    }
}

autoSizeTextArea();