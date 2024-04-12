const mongoose = require("../config/database");

const schemaVenta = new  mongoose.Schema({
    fecha: {
        type: Date,
        required: true
    },

    usuario: {
        type: Schema.ObjectId,
        ref: "Usuario",
        required: true
    },

    estado: {
        type: String,
        required: true
    },
});

const Venta = mongoose.model("Venta", schemaVenta);
model.exports = Venta;