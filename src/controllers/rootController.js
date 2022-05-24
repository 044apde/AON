import Post from "../models/Post";
import User from "../models/User";
import bcrypt from "bcrypt";

export const home = async(req, res) => {
    console.log(req.url);
    return res.render("home", { pageTitle: "Home", path: req.url });
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
    const { id, pwd, pwd2, username, yy, mm, dd, gender } = req.body;
    if (pwd !== pwd2) {
        return res.status(400).render("join", {
            errorMessage: "비밀번호가 서로 맞지 않습니다.",
        });
    }
    const exists = await User.exists({ $or: [{ id }] });
    if (exists) {
        return res.status(400).render("join", {
            errorMessage: "이미 존재하는 아이디입니다.",
        });
    }
    try {
        await User.create({
            id,
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