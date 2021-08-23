# Aromo-API
REST API para uso en la web de los vecinos del barrio privado El Aromo.

Este servicio cuenta con endopoints que permiten crear, borrar, actualizar y listar (CRUD) grupos, categorías y proveedores de la base **aromo**. 


## Levantar API
Para levantar el proyecto en forma local:

 1. Descargar el repo
 2. Instalar módulos en la  **/api**

    *npm i* 

 3. Levantar una instancia local de MongoDB que exponga el puerto 27017. 
 4. Crear una base llamada **aromo** en MongoDB.
 5. Reemplazar en mongoose.js dentro de **src/db**, const uri='mongodb://127.0.0.1:27017/aromo'.
 6. Levantar el servicio con el comando `node index.js` dentro de **api/src**. Opcionalmente se puede usar `nodemon index.js` si se va a trabajar sobre la API
 7. A través de Postman por ejemplo, agregar grupos, categorías y proveedores en la base **aromo** de acuerdo a los modelos correspondientes dentro de **src/model**.
