const mongoose = require("../config/database");

const schemaPedido = new  mongoose.Schema({
    usuario: {
        type: new ObjectId(),
        required: true,
    },

    fecha: {
        type:Date,
        required: true
    },

    descripcion: {
        type: String,
        required: true
    },

    precio: {
        type: new Decimal128(),
        required: true
    }
});

const Pedido = mongoose.model("Pedido", schemaPedido);
model.exports = Pedido;