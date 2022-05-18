import User from "../models/User";

export const getJoin = (req, res) => {
  return res.render("test", { pageTitle: "JOIN" });
};

export const postJoin = async (req, res) => {
  const { name, email, password, password2 } = req.body;
  const pageTitle = "Join";
  if (password !== password2) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "비빌번호가 서로 맞지 않습니다.",
    });
  }
  const exists = await User.exists({ $or: [{ username }, { email }] });
  if (exists) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "This email/username is already taken.",
    });
  }
  try {
    await User.create({
      name,
      email,
      password,
    });
    return res.redirect("/login");
  } catch {
    return res.status(400).render("Join", {
      pageTitle,
      errorMessage: error._mesage,
    });
  }
};
  
  export const login = (req, res) => {
    return res.render("login", { pageTitle: "LOGIN" });
  };
  
  export const user = (req, res) => {
    return res.render("user", { pageTitle: "USER PAGE" });
  };

  export const editUser = (req, res) => {
    return res.render("editUser", { pageTitle: "Edit user" });
  };
