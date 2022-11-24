module.exports = (sequelize, Sequelize) => {
  const Team = sequelize.define("team", {
    name: {
      type: Sequelize.STRING
    },
    played: {
      type: Sequelize.INTEGER
    },
    goal_difference: {
      type: Sequelize.INTEGER
    },
    points: {
      type: Sequelize.INTEGER
    }
  });

  return Team;
};
