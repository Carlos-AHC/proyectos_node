const mongoose = require("../config/database");

const schemaServicio = new  mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },

    descripcion: {
        type:String,
        required: true
    }
});

const Servicio = mongoose.model("Servicio", schemaServicio);
model.exports = Servicio;