import { redirect } from "express/lib/response";
import Post from "../models/Post.js";
import Comment from "../models/Comments.js";

export const moveToSpecificBoard = async(req, res) => {
    const boardName = req.params.boardName;
    req.session.boardName = boardName;
    try {
        const posts = await Post.find({ boardName: boardName }).populate("owner").sort({ createdAt: -1 }).limit(20);
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
    const _id = res.locals.loggedInUser._id;
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
            boardName,
            owner: _id,
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
    const post = await Post.findById(_id).populate("owner").populate("comments");
    const comment_userid = post.owner.userid;
    const comment_createdAt =
        post.owner.createdAt.getFullYear() +
        "/" + post.owner.createdAt.getDate();
    console.log(comment_userid);
    if (!post) {
        return res.sendStatus(404);
    }
    return res.render("watch", { post, comment_userid, comment_createdAt });
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
    const { session: { user }, body: { text }, params: { id }, } = req;
    const post = await Post.findById(id);
    if (!post) {
        return res.sendStatus(404);
    };
    try {
        const comment = await Comment.create({
            text,
            owner: user._id,
            post: id,
        });
        post.comments.push(comment._id);
        post.save();
    } catch {
        console.log("sibal");
    }
    return res.sendStatus(201);
}