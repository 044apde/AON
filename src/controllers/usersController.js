import User from "../../../Youtube-clone-coding/src/models/User";

export const user = (req, res) => {
  return res.render("user", { pageTitle: "USER PAGE" });
};

export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "JOIN" });
};

export const postJoin = async (req, res) => {
  const { name, email, password, password2 } = req.body;
  const pageTitle = "Join";
  if (password !== password2) {
      return res.status(400).render("join", {
          pageTitle,
          errorMessage: "비밀번호가 서로 맞지 않습니다."
      });
  };
  const exists = await User.exists({ $or: [{ username }, { email }] });
  
  return res.render("join", { pageTitle: "JOIN" });
};

export const login = (req, res) => {
  return res.render("login", { pageTitle: "LOGIN" });
};

export const editUser = (req, res) => {
  return res.render("editUser", { pageTitle: "Edit user" });
};
