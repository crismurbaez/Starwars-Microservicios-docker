const express = require('express');
const morgan = require('morgan');


const server = express();

server.use(morgan('dev'));
server.use(express.json());

server.use(require("./routes"));

//si no encuentra un endpoint se va a ejecutar este
server.use("*", (req, res) => {
    res.status(404).send("Not Found");
})

//reescribo el manejador de errores de express, 
//es decir que no muestra toda la traza del error
server.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send({
        error: true,
        message: err.message
    })
})

module.exports = server;