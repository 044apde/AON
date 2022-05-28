const postContainer = document.getElementById("postContainer");
const form = document.getElementById("commentForm");

const handleSubmit = (event) => {
    event.preventDefault();
    const textarea = form.querySelector("textarea");
    const _id = postContainer.dataset.id;
    const text = textarea.value;
    if (text === "") {
        return;
    }
    fetch("/api/board/" + _id + "/comment", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: text }),
    });
    textarea.value = "";
};

if (form) {
    form.addEventListener("submit", handleSubmit);
}