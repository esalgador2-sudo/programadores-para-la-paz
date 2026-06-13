const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Nuestro Array en memoria con los dos reportes iniciales
let reportes = [
    { id: 1, titulo: "Luminaria dañada", descripcion: "La farola del parque principal no enciende.", sector: "Centro" },
    { id: 2, titulo: "Fuga de agua", descripcion: "Hay una tubería rota en la calle principal.", sector: "Norte" }
];

// Ruta GET para consultar todos los reportes
app.get('/reportes', (req, res) => {
    res.json(reportes);
});

// Ruta POST para agregar un nuevo reporte
app.post('/reportes', (req, res) => {
    const nuevoReporte = {
        id: reportes.length + 1,
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        sector: req.body.sector
    };
    reportes.push(nuevoReporte);
    res.status(201).json({ mensaje: "Reporte creado con éxito", datos: nuevoReporte });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo con éxito en http://localhost:${PORT}`);
});