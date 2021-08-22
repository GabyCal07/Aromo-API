const mongoose = require('mongoose');

const uri = "mongodb+srv://GabyCal07:Rabanito01@cluster0.xtjm2.mongodb.net/aromo?retryWrites=true&w=majority";

mongoose.connect(uri, {    
    useNewUrlParser: true,
    UseCreateIndex: true,
    useUnifiedTopology: true
});
