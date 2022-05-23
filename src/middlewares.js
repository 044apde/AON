import { render } from "express/lib/response";

export const localsMiddleware = (req, res, next) => {
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.loggedInUser = req.session.user || {};
    next();
};

export const protectorMiddleware = (req, res, next) => {
    if(req.session.loggedIn == true){
        return next();
    } else {
        if(req.originalUrl !== "/login"){
            return res.redirect("/login");
        } else {
            return next();
        }
    }
};

export const publicOnlyMiddleware = (req, res, next) => {
    if(!req.session.loggedIn) {
        return next();
    } else {
        return res.redirect("/");
    }
}
