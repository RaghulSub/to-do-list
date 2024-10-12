import { Model, DataTypes } from "sequelize";
import sequelize from "../database/config";

class ToDoModel extends Model {
  public id!: string;
  public title!: string;
  public description!: string;
  public completed!: boolean;
  public createdAt!: Date;
  public updatedAt!: Date;
}

ToDoModel.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    completed: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    sequelize,
    modelName: "Todo",
  }
);

export default ToDoModel;
