// el usuario podrá acceder a urls donde el se puede autenticar

// requiriendo express para crear rutas
const express = require('express'); 
const router = express.Router(); //.Router() permite tener un objeto para facilitar la creación de rutas

// rutas para que se autentique el usuario
router.get('/users/signin',(req,res)=>{
  res.render('users/signin');//archivo que esta en vistas en users  
});

router.get('/users/signup',(req,res)=>{
    res.render('users/signup');
});
// se necesita exportar método router
module.exports=router;