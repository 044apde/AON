const postContainer = document.getElementById("postContainer");
const form = document.getElementById("commentForm");

const handleSubmit = async(event) => {
    event.preventDefault();
    const textarea = form.querySelector("input");
    const text = textarea.value;
    const postId = postContainer.dataset.id;
    console.log(postId);
    if (text === "") {
        return;
    }
    await fetch("/api/board/" + postId + "/comment", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: text }),
    });
    textarea.value = "";
    window.location.reload();
};

if (form) {
    form.addEventListener("submit", handleSubmit);
}