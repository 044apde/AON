import User from "../models/User";

export const getProfile = async (req, res) => {
    return res.render("profile");
};