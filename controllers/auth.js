const UserModel = require('../models/User');
const { StatusCodes } = require('http-status-codes');

const register = async (req, res) => {
  //mongoose does the validation
  const user = await UserModel.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  res.send('login user');
};

module.exports = { register, login };
