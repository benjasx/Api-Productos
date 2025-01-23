import express from "express";
import router from "./router";
import db from "./config/db";
import colors from 'colors'


//CONECTAR A LA BBDD

async function connectDB() {
  try {
    await db.authenticate()
    db.sync()
    console.log(colors.bgBlue.white('Conexion exitosa a la Base de Datos'))
  } catch (error) {
    console.log(error)
    console.log(colors.bgRed.white('Hubo un error al conectar a BD'))
  }
}
connectDB()

const server = express();

server.use('/api/products', router)

export default server;
