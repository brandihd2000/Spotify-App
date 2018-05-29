'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;


//conexion con la base de datos hecha en mongoDB
mongoose.connect('mongodb://localhost:27017/curso_mean',(err, res) =>{
 if (err) {
    throw err; 
 }else{
     console.log("Conexion exitosa con la base de datos Curso_Mean");

     app.listen(port, function(){
        console.log("Servidor del Api Rest de musica escuchando en http://localhost:"+port);
     });

 }
});


