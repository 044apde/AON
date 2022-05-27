import { render } from "express/lib/response";

export const localsMiddleware = (req, res, next) => {
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.loggedInUser = req.session.user || {};
    res.locals.title = req.session.title;
    res.locals.link = req.session.link;
    res.locals.boardName = req.session.boardName;
    console.log(res.locals.boardName);
    next();
};

export const boardNameMiddleware = (req, res, next) => {
    res.locals.boardName = req.session.boardName;
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