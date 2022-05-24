import Post from "../models/Post";

export const moveToSpecificBoard = (req, res) => {
    console.log(req.params);
    return res.render("board");
};
export const getPost = (req, res) => {
    return res.render("board");
};
export const postPost = (req, res) => {
    return res.render("board");
};