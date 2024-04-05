const { model } = require("mongoose");
const mongoose = require("../config/database");

const schemaProductos = new mongoose.Schema({
    referencia: {
        type: String,
        required: [true, 'La referencia es obligatoria']
    },
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        default: [0],
        min: [0]
    },
    stock: {
        type: Number,
        default: [0],
        min: [0]
    },
    imagen: {
        type: String,
        required: true
    },
    habilitado: {
        type: Boolean,
        required: true
    },


});

const producto = mongoose.model("producto", schemaProductos);
module.exports = producto;