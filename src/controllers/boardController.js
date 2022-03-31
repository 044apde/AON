export const home = (req, res) => {
    return res.render("home", {pageTitle: "Home"});
}

export const watcthBoard = (req, res) => {
    return res.render("watcthBoard", {pageTitle: "전체 게시판"});
}

export const watchContent = (req, res) => {
    return res.render("watch", {pageTitle: "Watch"});
}

export const upload = (req, res) => {
    return res.render("upload", {pageTitle: "upload"});
}