import Post from "../models/Post";

export const home = async (req, res) => {
    const posts = await Post.find({});
    return res.render("home", {pageTitle: "Home"});
};

export const watcthBoard = (req, res) => {
    return res.render("watcthBoard", {pageTitle: "전체 게시판"});
};

export const watchContent = (req, res) => {
    return res.render("watch", {pageTitle: "Watch"});
};

export const writing = (req, res) => {
    return res.render("upload", {pageTitle: "upload"});
};