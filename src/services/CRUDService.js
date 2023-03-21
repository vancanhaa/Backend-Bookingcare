import bcrypt from "bcryptjs";

import db from "../models/index";

const salt = bcrypt.genSaltSync(10);

const createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hassPassword = await hashUserPassword(data.password);
      await db.User.create({
        email: data.email,
        password: hassPassword,
        first_name: data.firstName,
        last_name: data.lastName,
        address: data.address,
        gender: data.gender === "1" ? true : false,
        role_id: data.roleId,
        phone_number: data.phoneNumber,
      });
      resolve("create a new user success!");
    } catch (error) {
      reject(error);
    }
  });
};

const getAllUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const users = await db.User.findAll({
        raw: true,
      });
      resolve(users);
    } catch (error) {
      reject(error);
    }
  });
};

const hashUserPassword = (password) => {
  return new Promise(async (resole, reject) => {
    try {
      const hashPassword = bcrypt.hashSync(password, salt);
      resole(hashPassword);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  createNewUser,
  getAllUser,
};
