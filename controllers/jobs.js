const { StatusCodes } = require('http-status-codes');
const JobModel = require('../models/Job');
const { BadRequestError, NotFoundError } = require('../errors');

const getAllJobs = async (req, res) => {
  res.send('get all Jobs');
};

const getJob = async (req, res) => {
  res.send('get Job');
};

const createJob = async (req, res) => {
  //add user obtained from prev middleware to req body here to build relationship
  req.body.createdBy = req.user.userId;
  const job = await JobModel.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const updateJob = async (req, res) => {
  res.send('update Job');
};

const deleteJob = async (req, res) => {
  res.send('delete Job');
};

module.exports = { getAllJobs, getJob, createJob, updateJob, deleteJob };
