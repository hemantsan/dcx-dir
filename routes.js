const express = require('express');
const { generateToken } = require('./auth/token');
const {
  allDevelopers,
  registerDeveloper,
  viewDeveloper,
  viewDashboard,
} = require('./controllers/DeveloperController');
const { allSkills, addNewSkill } = require('./controllers/SkillController');
const routes = express.Router();

routes.get('/', (req, res) => {
  const token = generateToken({ username: 'dcx-dev-dir' });
  res.status(200).json({ message: 'Welcome to DCX Developer Directory', status: 200, data: token });
});

// Developers routes
routes.get('/dashboard', viewDashboard);
routes.get('/developers', allDevelopers);
routes.get('/developers/:id', viewDeveloper);
routes.post('/register-developer', registerDeveloper);

// Skills routes
routes.get('/skills', allSkills);
routes.post('/register-skill', addNewSkill);

module.exports = routes;
