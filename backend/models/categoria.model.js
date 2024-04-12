const mongoose = require("../config/database");

const schemaCategoria = new  mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },

    descripcion: {
        type:String,
        required: true
    }
});

const Categoria = mongoose.model("Categoria", schemaCategoria);
model.exports = Categoria;