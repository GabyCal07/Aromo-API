const mongoose = require('mongoose');

const Proveedor = mongoose.model('Proveedor', {
    name: {
        type: String,
        required: true        
    },
    info: {
        type: String,
        required: true
    },
    category: { 
        type: String,
        required: true
    },
    review: {
        type: Array
     },
    user: {
        type: Array
    },    
    img: { 
        type: String,
        required: true
    }    
});

module.exports = Proveedor;