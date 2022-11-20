const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
    const response = await pool.query('SELECT * FROM medico');
    res.status(200).json(response.rows);
});

router.get('/:id', async(req, res, next) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM medico WHERE id = $1 ', [id]);
    res.json(response.rows);
});

router.patch('/:id', async(req, res, next) => {
    const id = req.params.id;
    const { name, lastname, birthdate, cellphone, city, municipality, address, rh, specialty, schedule } = req.body;
    const response = await pool.query('UPDATE paciente SET name=$2, lastname=$3, birthdate=$4, cellphone=$5, city=$6, municipality=$7, address=$8, rh=$9, specialty=$10, schedule=$11  WHERE id = $1', [
        id,
        name,
        lastname,
        birthdate,
        cellphone,
        city,
        municipality,
        address,
        rh,
        specialty,
        schedule
    ]);
    console.log(response);
    res.send('Doctor updated successfully');
});

router.delete('/:id', async(req, res, next) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM medico WHERE id = $1', [id]);
    console.log(response);
    res.json(`Doctor ${id} deleted successfully`);
});

router.post('/', async (req, res, next) => {
    const { name, lastname, birthdate, cellphone, city, municipality, address, rh, specialty, schedule } = req.body;
    const response = await pool.query('INSERT INTO paciente (name, lastname, birthdate, cellphone, city, municipality, address, rh, specialty, schedule) VALUES ($1, $2)', [name, lastname, birthdate, cellphone, city, municipality, address, rh, specialty, schedule]);
    console.log(response);
    res.json({
        message: 'Doctor added succesfully',
        body: {
            user: {name, lastname, birthdate, cellphone, city, municipality, address, rh, specialty, schedule}
        }
    })
});

module.exports = router;