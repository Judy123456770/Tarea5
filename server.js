const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

const URL = "http://www.raydelto.org/agenda.php";

// Listar contactos
app.get("/contactos", async (req, res) => {
    try {
        const respuesta = await axios.get(URL);
        res.json(respuesta.data);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al obtener los contactos"
        });
    }
});

// Guardar contacto
app.post("/contactos", async (req, res) => {
    try {
        const respuesta = await axios.post(URL, req.body);
        res.json(respuesta.data);
    } catch (error) {
        res.status(500).json({
            mensaje: "Error al guardar el contacto"
        });
    }
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});