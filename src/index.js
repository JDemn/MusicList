
//express is a fucntion and return a object 
const express=require('express');
const { dirname } = require('path');
const path = require('path');
const exphbs=require('express-handlebars'); //plantillas.porque se requiere en settind para handlebars
const methodOverride = require('method-override');
const session= require('express-session');
/*inizialations: 
odject of express saved at an function*/
const app= express();
require('./database');

//code of server divide on diverses sections

//setting
app.set('port',process.env.PORT||3002); // creando configuración del puerto //proces-PORT dice que si hay un puerto en la nuve disponible, lo use
app.set('views',path.join(__dirname,'views')); //decirle donde están las vistas a través de path  .join une directorios // dirname es una constante de node que devuelve la ruta en donde se está ejecutando el actual archivo
// en este caso index.js y lo concatena con otro, que en este caso queremos que sea views 
   
/* config handlebars */
app.engine('.hbs',exphbs({
    //onbejct of configurate
    //propierties
    defaultlayout:'main',
    layoutsDir: path.join(app.get('views'),'layouts'), //encontrar carpeta layouts
    partialsDir: path.join(app.get('views'),'partials'), //pequeñas partes de html que podemos reutilizar
    extname:'.hbs' // what extension will be have our files 
})); // .hbs es para indicar que son archivos handlebars,podemos poner el nombre de nuestras vistas como parámetro
/* hasta aquí se completa la configuración de handlebars, pero falta usarla, below */
app.set('view engine','.hbs'); // config motor de plantillas hbs

//middlewares (funciones ejectudas antes que llegen al servidor, o cuando llegan, then antes de que lleguen a las rutas)
app.use(express.urlencoded({extended:false}));// método para entender los datos que manden los forms, extended false omite imagenes
app.use(methodOverride('method')); // () se dice a través de que propiedad se va a enviar
app.use(session({
    secret:'Mysecretapp',
    resave: true,
    saveUninitialized: true
}));
//global variables , colocar ciertos datos accesibles por toda la aplicación

//routes
/* ya podemos llamar las rutas src/routes*/
app.use(require('./routes/index'));
app.use(require('./routes/musicList'));
app.use(require('./routes/users'));

//static files/ config where are the dir of files static
app.use(express.static(path.join(__dirname,'public'))); //configurando los archivos estáticos
// server start

app.listen(app.get('port'),()=>{
    //function aninimous for check if server is running
    console.log("server listening on port", app.get('port'));
}); //use of port
