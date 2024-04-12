const mongoose = require("../config/database");

const schemaUsuario = new  mongoose.Schema({
    cedula: {
        type: Number,
        required: true,
        unique: true
    },

    nombre: {
        type:String,
        required: true
    },

    apellido:{
        type: String,
        required: true
    },

    nombreUsuario:{
        type: String,
        required: true
    },

    contraseña:{
        type: String,
        required: true
    },

    correo:{
        type: String,
        required: true
    },

    rol:{
        type: String,
        required: true

    }

});

const Usuario = mongoose.model("Usuario", schemaUsuario);
model.exports = Usuario;