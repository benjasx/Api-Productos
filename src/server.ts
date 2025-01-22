import express from "express";
import router from "./router";
import db from "./config/db";


//CONECTAR A LA BBDD

async function connectDB() {
  try {
    await db.authenticate()
    db.sync()
    console.log('Conexion exitosa a la Base de Datos')
  } catch (error) {
    console.log(error)
    console.log('Hubo un error al intertar conectar a la base de datos')
  }
}
connectDB()

const server = express();

server.use('/api/products', router)

export default server;
