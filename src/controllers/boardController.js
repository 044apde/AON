import Post from "../models/Post";

export const moveToSpecificBoard = (req, res) => {
    const boardName = req.params.boardName + " 게시판";
    return res.render("board", { boardName });
};
export const getPost = (req, res) => {
    return res.render("board");
};
export const postPost = (req, res) => {
    return res.render("board");
};