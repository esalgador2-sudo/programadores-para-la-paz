// 1. Importar express
const express = require('express');
const app = express();
const PORT = 3000;

// 2. Ruta principal (http://localhost:3000)
app.get('/', (req, res) => {
    res.send('<h1>¡Servidor de la Semana 9 Activo Exitosamente!</h1><p>Bienvenido al backend del proyecto comunitario.</p>');
});

// 3. Ruta de estado (http://localhost:3000/estado)
app.get('/estado', (req, res) => {
    res.json({
        estado: "Servidor funcionando",
        servicio: "APT - comunitario"
    });
});

// 4. Encender el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo perfectamente en: http://localhost:${PORT}`);
});
