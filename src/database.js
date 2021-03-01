//database conection with command mongod
const mongoose=require('mongoose');

//metodo connect de mongoose, permite conectarse a una dirección de internet

mongoose.connect('mongodb://localhost/music-db-app',{
   //agregando un objeto de configuración
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false
}) //conectando a base local, /después el nombre de la db, si no existe la crea

// ejecutando una promesa para recibir mensaje por consola
    .then(db=> console.log('DB is connected'))
    .catch(err=>console.error(err)); //para ejecutar se llama desde index

