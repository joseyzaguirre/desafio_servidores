const express = require('express');
const fs = require('fs').promises;
const app = express();

app.use(express.static('static'));

app.get('/crear', async (req,res) =>{
    let archivo = `archivos/${req.query.archivo}`;
    let contenido = req.query.contenido;
    await fs.writeFile(archivo, contenido, 'utf-8');
    res.send('archivo de texto creado exitosamente!')
});

app.listen(8080, () => {
    console.log('servidor corriendo en el puerto 8080');
});
