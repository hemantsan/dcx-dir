const SkillSchema = require('../schemas/SkillSchema');

const fetchSkills = async () => {
  let data = await SkillSchema.find()
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });

  return data;
};

const addSkill = async (skil) => {
  const data = await skil
    .save()
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};

module.exports = { fetchSkills, addSkill };
