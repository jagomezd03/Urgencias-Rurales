const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
    const response = await pool.query('SELECT * FROM consultation');
    res.status(200).json(response.rows);
});

router.get('/:id', async(req, res, next) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM consultation WHERE id = $1 ', [id]);
    res.json(response.rows);
});

router.patch('/:id', async(req, res, next) => {
    const id = req.params.id;
    const { nombre, apellidos, direccion, ciudad, fecha_nacimiento, rh, especialidad, turno } = req.body;
    const response = await pool.query('UPDATE consultation SET id_med = $1, id_pac = $2, motivo = $3 WHERE id = $4', [
        id_med,
        id_pac,
        motivo,
        id
    ]);
    console.log(response);
    res.send('Consultation updated successfully');
});
router.delete('/:id', async(req, res, next) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM consultation WHERE id = $1', [id]);
    console.log(response);
    res.json(`Consultation ${id} deleted successfully`);
});

router.post('/', async (req, res, next) => {
    const { id_med, id_pac, motivo} = req.body;
    const response = await pool.query('INSERT INTO consultation (id_med, id_pac, motivo) VALUES ($1, $2)', [id_med, id_pac, motivo]);
    console.log(response);
    res.json({
        message: 'Consultation added succesfully',
        body: {
            user: {id_med, id_pac, motivo}
        }
    })
});

module.exports = router;