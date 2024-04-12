const mongoose = require("../config/database");

const schemaCita = new  mongoose.Schema({
    servicio: {
        type: ObjectId,
        required: true
    },

    fechaHora: {
        type:Date,
        required: true
    },

    precio:{
        type: ObjectId,
        required: true
    },

    servicio:{
        type: ObjectId,
        required: true
    }
});

const Cita = mongoose.model("Cita", schemaCita);
model.exports = Cita;