const SkillSchema = require('../schemas/SkillSchema');
const { fetchSkills, addSkill } = require('../apis/skill-api');

const allSkills = async (req, res) => {
  const record = await fetchSkills();

  return res.status(200).json({ message: 'Skills records loaded', status: 200, data: record });
};

const addNewSkill = async (req, res) => {
  const skill = new SkillSchema({
    name: req.body.name,
  });
  const record = await addSkill(skill);

  return res.status(200).json({ message: 'Skill added successfully', status: 200, data: record });
};

module.exports = {
  allSkills,
  addNewSkill,
};
