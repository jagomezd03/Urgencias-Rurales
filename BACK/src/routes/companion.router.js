const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
    const response = await pool.query('SELECT * FROM responsable');
    res.status(200).json(response.rows);
});

router.get('/:id', async(req, res, next) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM responsable WHERE id = $1 ', [id]);
    res.json(response.rows);
});

router.patch('/:id', async(req, res, next) => {
    const id = req.params.id;
    const { nombre, apellidos, direccion, ciudad, fecha_nacimiento, rh } = req.body;
    const response = await pool.query('UPDATE responsable SET nombre = $1, apellidos = $2, direccion = $3, ciudad = $4, fecha_nacimiento = $5, rh = $6  WHERE id = $7', [
        nombre,
        apellidos,
        direccion,
        ciudad,
        fecha_nacimiento,
        rh,
        id
    ]);
    console.log(response);
    res.send('Acompañante updated successfully');
});

router.delete('/:id', async(req, res, next) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM responsable WHERE id = $1', [id]);
    console.log(response);
    res.json(`Acompañante ${id} deleted successfully`);
});

router.post('/', async (req, res, next) => {
    const { nombre, apellidos, direccion, ciudad, fecha_nacimiento, rh } = req.body;
    const response = await pool.query('INSERT INTO responsable (nombre, apellidos, direccion, ciudad, fecha_nacimiento, rh) VALUES ($1, $2)', [nombre, apellidos, direccion, ciudad, fecha_nacimiento, rh]);
    console.log(response);
    res.json({
        message: 'Acompañante added succesfully',
        body: {
            user: {nombre, apellidos, direccion, ciudad, fecha_nacimiento, rh}
        }
    })
});

module.exports = router;