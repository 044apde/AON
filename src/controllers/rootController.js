import Post from "../models/Post";
import User from "../models/User";

export const home = async (req, res) => {
    return res.render("home", {pageTitle: "Home"});
};

export const login = (req, res) => {
    return res.render("login", {pageTitle: "Login"});
};

export const getJoin = (req, res) => {
    return res.render("join", {pageTitle: "Join"});
};

export const postJoin = async (req, res) => {
    console.log(req.body);
    const {id, pwd1, pwd2, username, yy, mm, dd, gender} = req.body;
    if(pwd1 !== pwd2) {
        console.log("check password.");
        return res.status(400).render("join", {
            errorMessage: "비밀번호가 서로 맞지 않습니다."
        });
    }
    const exists = await User.exists({$or: [{username}]});
    console.log(exists);
    if(exists) {
        console.log("username is already taken.");
        return res.status(400).render("join", {
            errorMessage: "이미 사용중인 아이디입니다."
        });
    }
    try{
        await User.create({
            id,
            pwd1,
            username,
            yy,
            mm,
            dd,
            gender
        });
        console.log("created");
        return res.redirect("/login");
    } catch {
        console.log("3");
        return res.status(400).render("join", {
            errorMessage: "error",
        });
    }
};
