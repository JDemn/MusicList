/* url de la página principal. /about etc*/
// requiriendo express para crear rutas
const express = require('express'); 
const router = express.Router();//.Router() permite tener un objeto para facilitar la creación de rutas
/*creando ruta*/
router.get('/',(req, res)=>{
    res.send('Index'); //luego se reemplaza por un archivo
});

//create a new route
router.get('/about',(req,res)=>{
    res.send("About");
});
// se necesita exportar método router
module.exports=router;