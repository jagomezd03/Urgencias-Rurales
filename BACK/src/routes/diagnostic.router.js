const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
    const response = await pool.query('SELECT * FROM diagnostic');
    res.status(200).json(response.rows);
});

router.get('/:id', async(req, res, next) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM diagnostic WHERE id = $1 ', [id]);
    res.json(response.rows);
});

router.patch('/:id', async(req, res, next) => {
    const id = req.params.id;
    const { nombre, apellidos, direccion, ciudad, fecha_nacimiento, rh, especialidad, turno } = req.body;
    const response = await pool.query('UPDATE diagnostic SET id_medic = $1, id_inc = $2, diagnostico = $3 WHERE id = $4', [
        id_medic,
        id_inc,
        diagnostico,
        id
    ]);
    console.log(response);
    res.send('Diagnostic updated successfully');
});

router.delete('/:id', async(req, res, next) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM diagnostic WHERE id = $1', [id]);
    console.log(response);
    res.json(`Diagnostic ${id} deleted successfully`);
});

router.post('/', async (req, res, next) => {
    const { id_medic, id_inc, diagnostico} = req.body;
    const response = await pool.query('INSERT INTO diagnostic (id_medic, id_inc, diagnostico) VALUES ($1, $2)', [id_medic, id_inc, diagnostico]);
    console.log(response);
    res.json({
        message: 'Diagnostic added succesfully',
        body: {
            user: {id_medic, id_inc, diagnostico}
        }
    })
});

module.exports = router;