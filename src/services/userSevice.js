const { where } = require("sequelize");
const bcrypt = require("bcryptjs");

const db = require("../models/index");

const handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const userData = {};
      const isExist = await checkUserEmail(email);
      if (isExist) {
        //user alrealy exits
        const user = await db.User.findOne({
          where: { email: email },
        });
        if (user) {
          //compare password
          const userWithPassword = await db.User.scope("withPassword").findOne({
            where: { email: email },
          });
          const checkPassword = bcrypt.compareSync(
            password,
            userWithPassword.password
          );
          if (checkPassword) {
            userData.errorCode = 0;
            userData.message = "OK";
            userData.userInfo = user;
          } else {
            userData.errorCode = 3;
            userData.message = "Wrong password";
          }
        } else {
          userData.errorCode = 2;
          userData.message = `User's not found`;
        }
      } else {
        //return error
        userData.errorCode = 1;
        userData.message = `Your's email isn't exits in your system. Please try other email!`;
      }
      resolve(userData);
    } catch (error) {
      reject(error);
    }
  });
};

const checkUserEmail = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findOne({
        where: { email: email },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  handleUserLogin,
};
