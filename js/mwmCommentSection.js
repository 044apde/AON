const postContainer = document.getElementById("postContainer");
const form = document.getElementById("commentForm");

const addComment = (text) => {
    const postComments = document.querySelector(".post__comments table");
    const newComment = document.createElement("tr");
    newComment.setAttribute("class", "post_comment");
    const newId = document.createElement("td");
    newId.setAttribute("id", "commentOwnerId");
    const newDate = document.createElement("td");
    newDate.setAttribute("id", "commentDate");
    const newText = document.createElement("td");
    const date = new Date();
    const newComment2 = document.createElement("tr");
    const month = date.getMonth() + 1;
    newText.innerText = text;
    newId.innerText = commentContainer.dataset.userid
    newDate.innerText = month + "/" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
    newComment.append(newId);
    newComment.append(newDate);
    newComment2.append(newText);
    postComments.appendChild(newComment);
    postComments.appendChild(newComment2);
};

const handleSubmit = async(event) => {
    event.preventDefault();
    const textarea = form.querySelector("input");
    const text = textarea.value;
    const postId = postContainer.dataset.id;
    if (text === "") {
        return;
    }
    const { status } = await fetch("/api/board/" + postId + "/comment", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: text }),
    });
    textarea.value = "";
    if (status === 201) {
        addComment(text);
    }
};

if (form) {
    form.addEventListener("submit", handleSubmit);
}