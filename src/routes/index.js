/* url de la página principal. /about etc*/
// requiriendo express para crear rutas
const express = require('express'); 
const router = express.Router();//.Router() permite tener un objeto para facilitar la creación de rutas

/*creando ruta*/
router.get('/',(req, res)=>{
    res.render('index'); //sen envía, render es para pasarla la dirección del archivo que queremos mostrar en la página
});

//create a new route
router.get('/about',(req,res)=>{
    res.render("about.hbs"); // debería ser about.hbs, archivo que está en las vistas, pero como ya está configurado para trabajar con handlebars, entonces se omite el .hbs
});
// se necesita exportar método router
module.exports=router;