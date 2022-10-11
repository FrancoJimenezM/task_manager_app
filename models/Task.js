const mongoose = require('mongoose')
//sólo los atributos definidos en el schema pasarán a la bbdd
const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "es necesario un nombre"],
        trim:true,
        maxlength:[20, "el nombre no puede tener más de 20 carácteres"]
    }, 
    completed:{
        type:Boolean,
        default: false,
    }
})



module.exports = mongoose.model('Task', TaskSchema)