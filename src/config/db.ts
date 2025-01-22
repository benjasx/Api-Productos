import { Sequelize } from "sequelize";

const db = new Sequelize('postgresql://rest_api_products_pc9j_user:LX6LKkVsY6TgOGNcJZKZxhFz1vpe5AH0@dpg-cu868ktds78s73a44k2g-a.oregon-postgres.render.com/rest_api_products_pc9j?ssl=true')
export default db