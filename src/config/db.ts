import { Sequelize } from "sequelize";
import dotev from 'dotenv';

dotev.config()

const db = new Sequelize(process.env.DATABASE_URL!)
export default db