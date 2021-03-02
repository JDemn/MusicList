// se establece como van a lucir los datos que queremos guardar para insertar etc
const mongoose=require('mongoose'); //también sirve para crear esquemas de db
const {Schema}=mongoose;  // y se guarda en una constante para poder usarlo

//como van a lucir mis playList
const NewListSchema=new Schema({
    title:{type:String,required:true},
    descripcion:{type:String,required:true},
    date:{type:Date, default:Date.now}
}); //llo guardamos en una const para decirle a mongo db como van a lucir los datos

module.exports=mongoose.model('List', NewListSchema); //exportar esquema, dos parámetros, la playList (en este caso le puse List) y el nombre del esquema