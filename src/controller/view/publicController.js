const { User } = require("../../models");

const renderHome = async (req, res) => {
  try {
    const allUsers = await User.findAll();
    const users = allUsers.map((user) => {
      return user.get({ plain: true });
    });

    const randomUserIndex = Math.floor(Math.random() * users.length);
    const randomUser = users[randomUserIndex];
    res.render("home", { randomUser });
  } catch (error) {
    logError("GET All Users", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get user" });
  }
};

const renderLogin = (req, res) => {
  res.render("login");
};

const renderSignUp = (req, res) => {
  res.render("signup");
};

module.exports = { renderHome, renderLogin, renderSignUp };
