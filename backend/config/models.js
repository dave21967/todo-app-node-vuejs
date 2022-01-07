const { Sequelize, DataTypes, Model } = require("sequelize");

const sequelize = new Sequelize("mysql://root:@localhost:3306/mytodo");

class Todo extends Model {}

Todo.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  done: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
}, {
  modelName: "todo",
  sequelize,
});

module.exports = {
  TodoModel: Todo
};