require('./db/mongoose');

const express = require('express');
const app = express();

const Grupo = require('./model/grupos');
const Categoria = require('./model/categorias');
const Proveedor = require('./model/proveedores');

const port = process.env.PORT || 3001;

app.use(express.json()); 

app.get('/', (req, res) => {
    res.send("API Aromo");    
});  

// GRUPOS
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
    .catch(err => {
        res.status(404).send(err);
    });
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

app.delete('/grupo/:id', (req, res) => {
    const _id = req.params.id;
    Grupo.deleteOne({ _id: _id })
    .then((result) => {
        if (!result) {
            return res.status(404).send("Grupo no encontrado");
        }       
        res.status(200).send("El grupo ha sido eliminado");
    })
    .catch((err) => {
        res.status(400).send(err);
    });
});


// CATEGORIAS
// Create: Crear categoria
app.post('/categoria',(req, res) => {
     
    const categoria = new Categoria(req.body); 
 
    categoria.save()
    .then(() => {
        res
        .status(201)  
        .send(categoria);
    })
    .catch((err) => {
        res.status(400).send(err);
    });
})

// Read: Mostrar todos las categorias
app.get('/categorias', (req, res) => {    
    Categoria.find()
    .then((result) => {
        res.send(result);
    })
    .catch(err => {
        res.status(404).send(err);
    });
});  

// Read: Mostrar todos las categorias
app.get('/categorias/:grupo', (req, res) => {    
    Categoria.find({group: req.params.grupo})
    .then((result) => {
        res.send(result);
    })
    .catch(err => {
        res.status(404).send(err);
    });
}); 

// Update: Actualizar categorias
app.patch('/categoria/:id', (req, res) => {
    const _id = req.params.id;
    Categoria.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true})
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

// Delete: Borrar una categoria
app.delete('/categoria/:id', (req, res) => {
    const _id = req.params.id;
    Categoria.deleteOne({ _id: _id })
    .then((result) => {        
        if (!result) {
            return res.status(404).send("Categoría no encontrada");
        }
        res.status(200).send("La categoría ha sido eliminada");
    })
    .catch((err) => {
        res.status(400).send(err);
    });
});



// PROVEEDORES
// Create: Crear proveedor
app.post('/proveedor',(req, res) => {     
    const proveedor = new Proveedor(req.body);  
    proveedor.save()
    .then(() => {
        res
        .status(201)  
        .send(proveedor);
    })
    .catch((err) => {
        res.status(400).send(err);
    });
});

// Read: Mostrar todos las categorias
app.get('/proveedores', (req, res) => {    
    Proveedor.find()
    .then((result) => {
        res.send(result);
    })
    .catch(err => {
        res.status(404).send(err);
    });
});  

// Read: Mostrar todos las categorias
app.get('/proveedores/:categoria', (req, res) => {           
    Proveedor.find({category: req.params.categoria})
    .then((result) => {
        res.send(result);
    })
    .catch(err => {
        res.status(404).send(err);
    });
});  

// Update: Actualizar info de un grupo
app.patch('/proveedor/:id', (req, res) => {
    const _id = req.params.id;
    Proveedor.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true})
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

app.delete('/proveedor/:id', (req, res) => {
    const _id = req.params.id;
    Proveedor.deleteOne({ _id: _id })
    .then((result) => {
        if (!result) {
            return res.status(404).send("Proveedor no encontrado");
        }        
        res.status(200).send("El proveedor ha sido eliminado");
    })
    .catch((err) => {
        res.status(400).send(err);
    });
});

app.listen(port, () => {
    console.log(`Funcionando en puerto ${port}`);
});
