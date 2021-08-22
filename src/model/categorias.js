const mongoose = require('mongoose');

const Categoria = mongoose.model('Categoria', {
    name : {
        type: String,
        required: true        
    },
    img: { 
        type: String,
        required: true
    },
    group: {
        type: String,
        required: true
    }
});

module.exports = Categoria;