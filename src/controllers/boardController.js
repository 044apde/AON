import Post from "../models/Post.js";

export const moveToSpecificBoard = async(req, res) => {
    req.session.boardName = boardName;
    const boardName = req.params.boardName
    try {
        const posts = await Post.find({});
        return res.render("board", { boardName, posts });
    } catch {
        return res.render("post", { boardName });
    };
};
export const getPost = (req, res) => {
    const boardName = req.params.boardName
    return res.render("post", { boardName });
};
export const postPost = async(req, res) => {
    const { title, text, boardName } = req.body;
    console.log(req.body);
    console.log(res.locals.boardName);
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
        res.redirect("/");
    } catch {
        return res.status(400).render("post", {
            errorMessage: "오류가 발생했습니다.",
        })
    };
    return res.end();
};