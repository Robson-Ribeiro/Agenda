const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    exemploTitulo: String,
    exemploNumero: Number,
    exemploNome: { type: String, required: true }
});

const HomeModel = mongoose.model('Home', HomeSchema);

module.exports = HomeModel;
