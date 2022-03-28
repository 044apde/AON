import res from "express/lib/response";

export const join = (req, res) => {
    return res.render("join", {pageTitle: "JOIN"});
}

export const login = (req, res) => {
    return res.render("login", {pageTitle: "LOGIN"});
}

export const editUser = (req, res) => {
    return res.render("editUser", {pageTitle: "Edit user"})
}