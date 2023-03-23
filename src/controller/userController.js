// import { handleUserLogin } from "../services/userSevice";
const userSevice = require("../services/userSevice");
const handleLogin = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  //check email exist
  //compare password
  //return unserInfo
  //access_token: JWT
  if (!email || !password) {
    return res.status(500).json({
      errorCode: 1,
      message: "Missing inputs parameter",
    });
  }

  const userData = await userSevice.handleUserLogin(email, password);
  const { errorCode, message, userInfo } = userData;
  return res.status(200).json({
    errorCode,
    message,
    userInfo,
  });
};
const handleLogout = (req, res) => {
  return res.send("handleLogout from userController");
};

module.exports = {
  handleLogin,
  handleLogout,
};
