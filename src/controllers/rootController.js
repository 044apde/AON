import Post from "../models/Post";
import User from "../models/User";
import bcrypt from "bcrypt";

export const home = async(req, res) => {
    try {
        const posts_자유 = await Post.find({ boardName: "자유" }).sort({ createdAt: -1 }).limit(7);
        const posts_정보 = await Post.find({ boardName: "정보" }).sort({ createdAt: -1 }).limit(7);
        const posts_취창업 = await Post.find({ boardName: "취창업" }).sort({ createdAt: -1 }).limit(7);
        const posts_장터 = await Post.find({ boardName: "장터" }).sort({ createdAt: -1 }).limit(7);
        const posts_한대신문 = await Post.find({ boardName: "한대신문" }).sort({ createdAt: -1 }).limit(7);
        const posts_학과 = await Post.find({ boardName: "학과" }).sort({ createdAt: -1 }).limit(7);
        const posts_동아리 = await Post.find({ boardName: "동아리" }).sort({ createdAt: -1 }).limit(7);
        const posts_학회 = await Post.find({ boardName: "학회" }).sort({ createdAt: -1 }).limit(7);
        return res.render("home", {
            posts_자유,
            posts_정보,
            posts_취창업,
            posts_장터,
            posts_한대신문,
            posts_학과,
            posts_동아리,
            posts_학회
        });
    } catch {
        console.log("fuck!");
        return res.render("home", {});
    };
};

export const getLogin = (req, res) => {
    return res.render("login");
};

export const postLogin = async(req, res) => {
    const { id, pwd } = req.body;
    const user = await User.findOne({ id });
    if (!user) {
        return res.status(400).render("login", {
            errorMessage: "아이디 혹은 비밀번호가 맞지 않습니다."
        });
    }
    const checkPwd = await bcrypt.compare(pwd, user.pwd);
    if (!checkPwd) {
        return res.status(400).render("login", {
            errorMessage: "아이디와 비밀번호가 맞지 않습니다."
        })
    }
    req.session.loggedIn = true;
    req.session.user = user;
    return res.status(200).redirect("/");
};

export const getJoin = (req, res) => {
    return res.render("join", { pageTitle: "Join" });
};

export const postJoin = async(req, res) => {
    const { userid, pwd, pwd2, username, yy, mm, dd, gender } = req.body;
    if (pwd !== pwd2) {
        return res.status(400).render("join", {
            errorMessage: "비밀번호가 서로 맞지 않습니다.",
        });
    }
    const exists = await User.exists({ $or: [{ userid }] });
    if (exists) {
        return res.status(400).render("join", {
            errorMessage: "이미 존재하는 아이디입니다.",
        });
    }
    try {
        await User.create({
            userid,
            pwd,
            username,
            yy,
            mm,
            dd,
            gender,
        });
        return res.status(200).redirect("/login");
    } catch {
        return res.status(400).render("join", {
            errorMessage: "무언가 잘못되었습니다.",
        });
    }
};

export const logout = async(req, res) => {
    req.session.destroy();
    return res.redirect("/login");
};

export const searchPost = async(req, res) => {
    const keyword = req.query.keyword;
    if (keyword) {
        const searchedPost = await Post.find({
            $or: [{
                title: {
                    $regex: new RegExp(keyword, "i")
                }
            }, {
                text: {
                    $regex: new RegExp(keyword, "i")
                }
            }]
        }).limit(17);
        return res.render("searchedPost", { keyword, posts: searchedPost });
    }
    console.log(keyword);
}