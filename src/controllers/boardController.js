import { redirect } from "express/lib/response";
import Post from "../models/Post.js";
import Comments from "../models/Comments.js";

export const moveToSpecificBoard = async(req, res) => {
    const boardName = req.params.boardName;
    req.session.boardName = boardName;
    try {
        const posts = await Post.find({ boardName: boardName }).sort({ createdAt: -1 }).limit(20);
        return res.render("board", { boardName, posts });
    } catch {
        console.log("fuck!");
        return res.render("post", { boardName });
    };
};

export const getPost = (req, res) => {
    const boardName = req.params.boardName
    return res.render("post", { boardName });
};

export const postPost = async(req, res) => {
    const { title, text, boardName } = req.body;
    const id = res.locals.loggedInUser.id;
    if (title.length == 0) {
        return res.status(400).render("post", {
            errorMessage: "제목을 입력해주세요.",
        });
    } else if (text.length == 0) {
        return res.status(400).render("post", {
            errorMessage: "본문을 입력해주세요.",
        });
    }
    try {
        await Post.create({
            title,
            text,
            id,
            boardName
        })
        console.log("post done.");
        res.redirect("/board/" + boardName);
    } catch {
        return res.status(400).render("post", {
            errorMessage: "오류가 발생했습니다.",
        })
    };
    return res.end();
};

export const getWatch = async(req, res) => {
    const _id = req.params._id;
    const post = await Post.findById({ _id });
    req.session.idPosting = post.id;
    return res.render("watch", { post });
}

export const deletePost = async(req, res) => {
    const _id = req.params._id;
    const boardName = req.params.boardName;
    console.log(boardName);
    try {
        await Post.findByIdAndDelete({ _id });
        console.log(_id + ` are deleted!`);
        return res.redirect("/board/" + boardName);
    } catch {
        console.log("fail deleting");
        return res.redirect("/");
    }
}

export const createComment = async(req, res) => {
    const { session: { user }, body: { text }, params: { _id }, } = req;
    const post = await Post.findById(_id);
    if (!post) {
        return res.sendStatus(404);
    };
    const comment = Comments.create({
        text,
        owner: user.id,
        post: _id,
    });

    return res.sendStatus(201);
}