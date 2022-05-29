import res, { redirect } from "express/lib/response";
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
    const ownerId = res.locals.loggedInUser.userid;
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
            ownerId,
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
    const boardName = req.params.boardName;
    req.session.boardName = boardName;
    const post = await Post.findById(_id).populate("owner").populate("comments");
    if (!post) {
        return res.sendStatus(404);
    }
    return res.render("watch", { post, boardName });
}

export const deletePost = async(req, res) => {
    const _id = req.params._id;
    const boardName = req.params.boardName;
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
            ownerId: user.userid,
            post: id,
        });
        post.comments.push(comment._id);
        post.save();
    } catch {
        console.log("sibal");
    }
    return res.sendStatus(201);
}

export const mwmboard = async(req, res) => {
    const mwms = await Post.find({ boardName: "뮴팅" }).sort({ createdAt: -1 }).limit(10);
    return res.render("mwm", { mwms });
}

export const getcreateMwm = async(req, res) => {
    const info = " [뮴팅 게시글 작성시 유의 사항] \n 1. 뮴팅 게시판은 본인인증과 회원등급 인증이 완료된 회원에 한하여 이용 가능합니다. \n 2. 성별, 나이, 회원등급은 필수입력 사항으로, 인증된 회원정보를 기반으로 하여 게시글에 자동으로 입력됩니다. \n 3. 희망인원 입력은 선택 사항이나, 수월한 뮴팅 이용을 위해 작성을 권장드립니다.\n\n" +
        "[뮴팅 이용 방법] \n 1. 게시글을 보며 마음에 드는 성별, 나이, 소개를 적은 상대를 골라 오픈채팅 및 댓글로 대화를 시도하세요! \n 2. 대화가 마음에 들지 않을 경우 정중한 사과와 함께 채팅 방을 나가주세요! \n 3. 만약 상대가 마음에 든다면 번호를 교환해 주세요! \n 4. 약속 시간과 장소를 잡고 즐거운 식사 되세요! \n\n" +
        "[이용 시 주의 사항] \n 1. “노쇼” 발생 시, 당사자는 31일 동안 뮴팅 이용을 제한받습니다. \n 2. 욕설, 비하, 성희롱 등의 상대를 불쾌하게 하는 채팅 시, 당사자는 60일 동안 뮴팅 이용을 제한받습니다."
    return res.render("createMWm", { info });
}

export const postcreateMwm = async(req, res) => {
    const { title, text } = req.body;
    const boardName = "뮴팅";
    const ownerId = res.locals.loggedInUser.userid;
    const _id = res.locals.loggedInUser._id;
    console.log(ownerId, _id);
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
        const mwm = await Post.create({
            title,
            text,
            boardName,
            owner: _id,
            ownerId,
        })
        res.redirect("/mwm");
    } catch {
        return res.status(400).render("post", {
            errorMessage: "오류가 발생했습니다.",
        })
    };
    return res.end();
}

export const watchMwm = async(req, res) => {
    const _id = req.params.id;
    const mwm = await Post.findById(_id).populate("owner").populate("comments");
    console.log(mwm);
    return res.render("watchMwm", { mwm });
}