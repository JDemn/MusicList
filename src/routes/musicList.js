// url del servidor en donde se puede crear una nueva lista, actualizar, eliminar
// requiriendo express para crear rutas
const express = require('express'); 
const router= express.Router(); //.Router() permite tener un objeto para facilitar la creación de rutas

router.get('/MusicList',(req,res)=>{
    res.send('music from Api');
})
// se necesita exportar método router
module.exports=router;
