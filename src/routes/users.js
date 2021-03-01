// el usuario podrá acceder a urls donde el se puede autenticar

// requiriendo express para crear rutas
const express = require('express'); 
const router = express.Router(); //.Router() permite tener un objeto para facilitar la creación de rutas

// rutas para que se autentique el usuario
router.get('/users/signin',(req,res)=>{
  res.send('Ingresando a la aplicación');  
});

router.get('/users/signup',(req,res)=>{
    res.send('formulario de autenticación');
});
// se necesita exportar método router
module.exports=router;