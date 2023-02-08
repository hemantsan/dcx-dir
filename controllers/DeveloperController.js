const DeveloperSchema = require('../schemas/DeveloperSchema');
const { fetchDevelopers, addDeveloper, fetchDeveloper, fetchDashboard } = require('../apis/developer-api');

const allDevelopers = async (req, res) => {
  const record = await fetchDevelopers();

  return res.status(200).json({ message: 'Developer records loaded', status: 200, data: record });
};

const viewDeveloper = async (req, res) => {
  const record = await fetchDeveloper();

  return res.status(200).json({ message: 'Developer records', status: 200, data: record });
};

const viewDashboard = async (req, res) => {
  const record = await fetchDashboard();

  return res.status(200).json({ message: 'Developer records', status: 200, data: record });
};

const registerDeveloper = async (req, res) => {
  const dev = new DeveloperSchema({
    name: req.body.name,
    location: req.body.location,
    skill: req.body.skill,
    email: req.body.email,
  });
  const record = await addDeveloper(dev);

  return res
    .status(200)
    .json({ message: 'Developer registered successfully', status: 200, data: record });
};

module.exports = {
  allDevelopers,
  registerDeveloper,
  viewDeveloper,
  viewDashboard
};
