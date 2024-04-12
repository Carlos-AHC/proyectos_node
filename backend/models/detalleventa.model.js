const mongoose = require("../config/database");

const schemaDetalleVenta = new  mongoose.Schema({
    venta: {
        type: new ObjectId(),
        required: true
    },

    producto: {
        type:new ObjectId(),
        required: true
    },

    cantidad:{
        type: Number,
        required: true
    },

    precioHistorico:{
        type: new Decimal128(),
        required: true
    }
});

const DetalleVenta = mongoose.model("DetalleVenta", schemaDetalleVenta);
model.exports = DetalleVenta;