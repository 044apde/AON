import Post from "../models/Post";

export const watcthBoard = (req, res) => {
    return res.render("watcthBoard", {pageTitle: "전체 게시판"});
};

export const watchContent = (req, res) => {
    return res.render("watch", {pageTitle: "Watch"});
};

export const writingPost = (req, res) => {
    return res.render("writing", {pageTitle: "writing post"});
}