const { BadRequestError, UnauthenticatedError } = require('../errors');
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
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError('please provide email and password');
  }

  const user = await UserModel.findOne({ email });
  //compare password
  if (!user) {
    throw new UnauthenticatedError('invalid credentials');
  }
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
};

module.exports = { register, login };
