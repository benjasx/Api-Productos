import express from "express";
import colors from 'colors'
import swaggerUI from 'swagger-ui-express'
import swaggerSpec, {swaggerUiOptions} from "./config/swagger";
import router from "./router";
import db from "./config/db";



//CONECTAR A LA BBDD

export async function connectDB() {
  try {
    await db.authenticate()
    db.sync()
    //console.log(colors.bgBlue.white('Conexion exitosa a la Base de Datos'))
  } catch (error) {
    //console.log(error)
    console.log(colors.bgRed.white('Hubo un error al conectar a BD'))
  }
}
connectDB()

const server = express();

server.use(express.json())

server.use('/api/products', router)


//DOCs
server.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec,swaggerUiOptions))
export default server;
