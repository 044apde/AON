import { render } from "express/lib/response";
import Post from "../src/models/Post.js"

export const localsMiddleware = async(req, res, next) => {
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.loggedInUser = req.session.user || {};
    res.locals.boardName = req.session.boardName;
    const post_last = await Post.findOne({}).sort({ createdAt: -1 }) || {};
    res.locals.title = post_last.title;
    res.locals.link = post_last._id;
    next();
};

export const boardMiddleware = (req, res, next) => {
    res.locals.boardName = req.session.boardName;
    res.locals.idPosting = req.session.idPosting;
    res.locals.url = req.originalUrl;
    return next();
};

export const protectorMiddleware = (req, res, next) => {
    if (req.session.loggedIn == true) {
        return next();
    } else {
        if (req.originalUrl !== "/login") {
            if (req.originalUrl == "/join") {
                return next();
            }
            return res.redirect("/login");
        } else {
            return next();
        }
    }
};

export const publicOnlyMiddleware = (req, res, next) => {
    if (!req.session.loggedIn) {
        return next();
    } else {
        return res.redirect("/");
    }
}