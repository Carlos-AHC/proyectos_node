const { model } = require("mongoose");
const mongoose = require("../config/database");

const schemaProducto = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },

    descripcion: {
        type: String,
        required: true
    },

    precio: {
        type: new Decimal128(),
        required: true
    },

    stock: {
        type: Number,
        required: true
    },

    imagen: {
        type: String,
        required: true
    },

    fechaVencimiento: {
        type: Date
    },

    categoria:{
        type: new ObjectId(),
        required: true
    }


});

const Producto = mongoose.model("Producto", schemaProducto);
module.exports = Producto;