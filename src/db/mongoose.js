const mongoose = require('mongoose');

const uri = "mongodb+srv://GabyCal07:Rabanito01@cluster0.xtjm2.mongodb.net/aromo?retryWrites=true&w=majority";

//mongoose.connect('mongodb://127.0.0.1:27017/aromo', {
mongoose.connect(uri, {    
    useNewUrlParser: true,
    UseCreateIndex: true,
    useUnifiedTopology: true
});
