const UserModel = require('../models/User');
const { StatusCodes } = require('http-status-codes');

const register = async (req, res) => {
  //using mongoose middleware pre, to has password
  //mongoose does the validation
  const user = await UserModel.create({ ...req.body });
  //create token, using schema instance
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

const login = async (req, res) => {
  res.send('login user');
};

module.exports = { register, login };
