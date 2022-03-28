export const home = (req, res) => {
    return res.render("home", {pageTitle: "Home"});
}

export const generalBoard = (req, res) => {
    return res.render("generalBoard", {pageTitle: "전체 게시판"});
}