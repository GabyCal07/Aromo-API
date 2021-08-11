require('./db/mongoose');

const express = require('express');
//const cors = require('cors');
const app = express();
const Grupo = require('./model/grupos');
const port = process.env.PORT || 3001;

app.use(express.json()); 

app.get('/', (req, res) => {
    res.send("API Aromo");    
});  

// Create: Crear grupo
app.post('/grupo',(req, res) => {
     
    const grupo = new Grupo(req.body); 
 
    grupo.save()
    .then(() => {
        res
        .status(201)  
        .send(grupo);
    })
    .catch((err) => {
        res.status(400).send(err);
    });
})

// Read: Mostrar todos los grupos
app.get('/grupos', (req, res) => {
    Grupo.find()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => { console.log(err) });
});  

// Update: Actualizar info de un grupo
app.patch('/grupo/:id', (req, res) => {
    const _id = req.params.id;
    Grupo.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true})
    .then((result) => {
        if(!result) {
            return res.status(404).send(err);
        }
        res.send(result);
    })
    .catch(err => {
        res.status(404).send(err);
    });
});

// Delete: Borrar un grupo
app.delete('/grupo/:id', (req, res) => {
    const _id = req.params.id;
    Grupo.findByIdAndDelete(_id)
    
    .then((result) => {
        // Si no lo encuentro, mando un 404.
        if (!result) {
            return res.status(404).send("Grupo no encontrado");
        }
        console.log(result);
        res.status(200).send("el grupo ha sido eliminado");
    })
    .catch((err) => {
        res.status(400).send(err);
    });
});

app.listen(port, () => {
    console.log(`Funcionando en puerto ${port}`);
});