export const user = (req, res) => {
    return res.render("user", {pageTitle: "USER PAGE"});
}

export const join = (req, res) => {
    return res.render("join", {pageTitle: "JOIN"});
}

export const login = (req, res) => {
    return res.render("login", {pageTitle: "LOGIN"});
}

export const editUser = (req, res) => {
    return res.render("editUser", {pageTitle: "Edit user"})
}