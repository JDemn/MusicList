// url del servidor en donde se puede crear una nueva lista, actualizar, eliminar
// requiriendo express para crear rutas
const express = require('express'); 
const router= express.Router(); //.Router() permite tener un objeto para facilitar la creación de rutas

//Utilizando el esquema de base de datos ./models/NewList para usar update, create,delete
const newList=require('../models/NewList'); //lo guardo en una constante

//agregar una nueva playList
router.get('/musicList/newPlayList',(req,res)=>{
  res.render('musicList/newpList');  
});

//ruta para recibir datos del formulario en musicList/newpList
router.post('/musicList/newpList',(req, res)=>{
        /*console.log(req.body);// req, propiedad para recibir los datos*/
  const {title,descripcion}=req.body; // sacar una propiedad del objecto {title}, puede hacerce con una variable
  const errors=[]; //arrego para validar. tiene los msj de errores
  if(!title){ //si no ecxiste esta propiedad
     errors.push({text:'por favor escriba un titulo'}); //añadiendo al array un nuevo objeto
  }
  if(!descripcion){
      errors.push({text:'por favor añade una descripción'});
  }
  // si hay >0 errors, regresar la vista de newList.hbs y los errors que tuvo
  if(errors.length>0){
      res.render('musicList/newpList',{  //mostrando errores y campos que ha insertado mal
          errors,
          title,
          descripcion
      });
  }
  else{
        //almacenar en la base de datos, a traves de un modelo de bd en dir models
        //res.send('Ok');
    //creando el nuevo dato, instanciandolo del esquema, que es una clase
     const newListt=new newList({title,descripcion});     //la guardo en newListt
     console.log(newListt);
     res.send('ok');
  }
});

//
router.get('/musicList',(req,res)=>{
    res.send('music from Api');
});
// se necesita exportar método router
module.exports=router;
