const { DataTypes } = require("sequelize");

const db = require("../utils/database");
const Series = require("./series.models");

const Season = db.define("users", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  serieId: {
    type: DataTypes.UUID,
    references: {
      model: Series,
      key: "id",
    },
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  seasonNumber: {
    type: DataTypes.SMALLINT,
    allowNull: false,
  },
  releaseYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  coverUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  traillerUrl: {
    type: DataTypes.STRING,
    defaultValue: true,
  },
});

module.exports = Season;
