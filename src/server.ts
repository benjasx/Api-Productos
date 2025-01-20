import  express  from "express";

const server = express()

//ROUTING
server.get('/',(req,res) =>{
    const datos = [
        {id:1, nombre:'Benja'},
        {id:2, nombre:'Hermi'}
    ]
    res.json(datos)
})

export default server