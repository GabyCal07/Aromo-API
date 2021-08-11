const mongoose = require('mongoose');

const Grupo = mongoose.model('Grupo', {
    name : {
        type: String,
        required: true        
    },
    description: {
        type: String,
        required: true
    },
    img: { 
        type: String,
        required: true
    },
    page: { 
        type: String,
        required: true
    }
});

module.exports = Grupo;