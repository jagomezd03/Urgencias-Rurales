const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
    const response = await pool.query('SELECT * FROM paciente');
    res.status(200).json(response.rows);
});

router.get('/:id', async(req, res, next) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM paciente WHERE id = $1 ', [id]);
    res.json(response.rows);
});

router.patch('/:id', async(req, res, next) => {
    const id = req.params.id;
    const { name, lastname, birthdate, cellphone, city, municipality, address, rh, height, weight, allergies } = req.body;
    const response = await pool.query('UPDATE paciente SET name=$2, lastname=$3, birthdate=$4, cellphone=$5, city=$6, municipality=$7, address=$8, rh=$9, height=$10, weight=$11, allergies=$12  WHERE id = $1', [
        id,
        name,
        lastname,
        birthdate,
        cellphone,
        city,
        municipality,
        address,
        rh,
        height,
        weight,
        allergies
    ]);
    console.log(response);
    res.send('Pacient updated successfully');
});

router.delete('/:id', async(req, res, next) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM paciente WHERE id = $1', [id]);
    console.log(response);
    res.json(`Pacient ${id} deleted successfully`);
});

router.post('/', async (req, res, next) => {
    const { name, lastname, birthdate, cellphone, city, municipality, address, rh, height, weight, allergies } = req.body;
    const response = await pool.query('INSERT INTO paciente (name, lastname, birthdate, cellphone, city, municipality, address, rh, height, weight, allergies) VALUES ($1, $2)', [name, lastname, birthdate, cellphone, city, municipality, address, rh, height, weight, allergies]);
    console.log(response);
    res.json({
        message: 'Pacient added succesfully',
        body: {
            user: {name, lastname, birthdate, cellphone, city, municipality, address, rh, height, weight, allergies}
        }
    })
});

module.exports = router;
