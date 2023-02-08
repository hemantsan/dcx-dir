const DeveloperSchema = require('../schemas/DeveloperSchema');
const SkillSchema = require('../schemas/SkillSchema');

const fetchDevelopers = async () => {
  let data = await DeveloperSchema.find()
    .skip(0)
    .populate('skill')
    .limit(50)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });

  return data;
};

const fetchDeveloper = async (id) => {
  let data = await DeveloperSchema.findOne(id)
    .populate('skill')
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });

  return data;
};

const addDeveloper = async (dev) => {
  const data = await dev
    .save()
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};

const fetchDashboard = async () => {
  let data = await SkillSchema.aggregate([
    {
      $lookup: {
        from: 'developer',
        let: { skill: '$skill' },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [{ $eq: ['$$skill', '$skill'] }],
              },
            },
          },
        ],
        as: 'data',
      },
    },
  ]);

  // let data = await DeveloperSchema.find()
  //   .skip(0)
  //   .populate("skill")
  //   .limit(50)
  //   .then((result) => {
  //     return result;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  return data;
};

module.exports = { fetchDevelopers, addDeveloper, fetchDeveloper, fetchDashboard };
