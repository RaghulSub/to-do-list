import { Model, DataTypes } from "sequelize";
import sequelize from "../database/config";

class ToDoModel extends Model {
  public id!: string;
  public title!: string;
  public description!: string;
  public completed!: boolean;
  public createdAt!: Date;
  public updatedAt!: Date;
  public deletedAt!: Date;
  public userId!: string;
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
    deletedAt: DataTypes.DATE,
    userId: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Todo",
    timestamps: true,
    paranoid: true,
  }
);

export default ToDoModel;
