const postContainer = document.getElementById("postContainer");
const form = document.getElementById("commentForm");

const handleSubmit = (event) => {
    event.preventDefault();
    const textarea = form.querySelector("textarea");
    const text = textarea.value;
    const postId = postContainer.dataset.id;
    console.log(postId);
    if (text === "") {
        return;
    }
    fetch("/api/board/" + postId + "/comment", {
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