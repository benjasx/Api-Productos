import { Sequelize } from "sequelize-typescript";
import dotev from 'dotenv';

dotev.config()

const db = new Sequelize(process.env.DATABASE_URL!,{
    models:[__dirname + '/../models/**/*.ts']
})
export default db