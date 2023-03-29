import { Dialect, Sequelize } from "sequelize";
import userModel, { User } from "../model/user.model";
import { IFormDB } from "../type/db.type";

const USER_NAME = process.env.USER_NAME as string;
const PASSWORD = process.env.PASSWORD as string;
const HOST = process.env.HOST as string
const DIALECT = process.env.DIALECT as Dialect | undefined
const DB_NAME = process.env.DB_NAME as string
const PORT = process.env.PORT as number | undefined
const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
    host: HOST,
    dialect: DIALECT,
    port: PORT
});


const db: IFormDB = {}
db.sequelize = sequelize
db.User = userModel(sequelize)
export default db
