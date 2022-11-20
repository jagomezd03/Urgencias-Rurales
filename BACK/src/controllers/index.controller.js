const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'password',
    database: 'postgres',
    port: '5432'
});

const getPacient = async (req, res) => {
    const response = await pool.query('SELECT * FROM paciente');
    res.status(200).json(response.rows);
};

const getPacientById = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM paciente WHERE id = $1 ', [id]);
    res.json(response.rows);
};

const updatePacient = async(req, res) => {
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
};

const deletePacient = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM paciente WHERE id = $1', [id]);
    console.log(response);
    res.json(`Pacient ${id} deleted successfully`);
};

const createPacient = async (req, res) => {
    const { name, lastname, birthdate, cellphone, city, municipality, address, rh, height, weight, allergies } = req.body;
    const response = await pool.query('INSERT INTO paciente (name, lastname, birthdate, cellphone, city, municipality, address, rh, height, weight, allergies) VALUES ($1, $2)', [name, lastname, birthdate, cellphone, city, municipality, address, rh, height, weight, allergies]);
    console.log(response);
    res.json({
        message: 'Pacient added succesfully',
        body: {
            user: {name, lastname, birthdate, cellphone, city, municipality, address, rh, height, weight, allergies}
        }
    })
};

const getDoctor = async (req, res) => {
    const response = await pool.query('SELECT * FROM medico');
    res.status(200).json(response.rows);
};

const getDoctorById = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM medico WHERE id = $1 ', [id]);
    res.json(response.rows);
};

const updateDoctor = async(req, res) => {
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
};

const deleteDoctor = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM medico WHERE id = $1', [id]);
    console.log(response);
    res.json(`Doctor ${id} deleted successfully`);
};

const createDoctor = async (req, res) => {
    const { name, lastname, birthdate, cellphone, city, municipality, address, rh, specialty, schedule } = req.body;
    const response = await pool.query('INSERT INTO paciente (name, lastname, birthdate, cellphone, city, municipality, address, rh, specialty, schedule) VALUES ($1, $2)', [name, lastname, birthdate, cellphone, city, municipality, address, rh, specialty, schedule]);
    console.log(response);
    res.json({
        message: 'Doctor added succesfully',
        body: {
            user: {name, lastname, birthdate, cellphone, city, municipality, address, rh, specialty, schedule}
        }
    })
};

const getCompanion = async (req, res) => {
    const response = await pool.query('SELECT * FROM responsable');
    res.status(200).json(response.rows);
};

const getCompanionById = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM responsable WHERE id = $1 ', [id]);
    res.json(response.rows);
};

const updateCompanion = async(req, res) => {
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
};

const deleteCompanion = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM responsable WHERE id = $1', [id]);
    console.log(response);
    res.json(`Acompañante ${id} deleted successfully`);
};

const createCompanion = async (req, res) => {
    const { nombre, apellidos, direccion, ciudad, fecha_nacimiento, rh } = req.body;
    const response = await pool.query('INSERT INTO responsable (nombre, apellidos, direccion, ciudad, fecha_nacimiento, rh) VALUES ($1, $2)', [nombre, apellidos, direccion, ciudad, fecha_nacimiento, rh]);
    console.log(response);
    res.json({
        message: 'Acompañante added succesfully',
        body: {
            user: {nombre, apellidos, direccion, ciudad, fecha_nacimiento, rh}
        }
    })
};

const getDiagnostic = async (req, res) => {
    const response = await pool.query('SELECT * FROM diagnostic');
    res.status(200).json(response.rows);
};

const getDiagnosticById = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM diagnostic WHERE id = $1 ', [id]);
    res.json(response.rows);
};

const updateDiagnostic = async(req, res) => {
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
};

const deleteDiagnostic = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM diagnostic WHERE id = $1', [id]);
    console.log(response);
    res.json(`Diagnostic ${id} deleted successfully`);
};

const createDiagnostic = async (req, res) => {
    const { id_medic, id_inc, diagnostico} = req.body;
    const response = await pool.query('INSERT INTO diagnostic (id_medic, id_inc, diagnostico) VALUES ($1, $2)', [id_medic, id_inc, diagnostico]);
    console.log(response);
    res.json({
        message: 'Diagnostic added succesfully',
        body: {
            user: {id_medic, id_inc, diagnostico}
        }
    })
};

const getConsultation = async (req, res) => {
    const response = await pool.query('SELECT * FROM consultation');
    res.status(200).json(response.rows);
};

const getConsultationById = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM consultation WHERE id = $1 ', [id]);
    res.json(response.rows);
};

const updateConsultation = async(req, res) => {
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
};

const deleteConsultation = async(req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM consultation WHERE id = $1', [id]);
    console.log(response);
    res.json(`Consultation ${id} deleted successfully`);
};

const createConsultation = async (req, res) => {
    const { id_med, id_pac, motivo} = req.body;
    const response = await pool.query('INSERT INTO consultation (id_med, id_pac, motivo) VALUES ($1, $2)', [id_med, id_pac, motivo]);
    console.log(response);
    res.json({
        message: 'Consultation added succesfully',
        body: {
            user: {id_med, id_pac, motivo}
        }
    })
};

module.exports = {
    getPacient,
    getDoctor,
    getCompanion,
    getPacientById,
    getDoctorById,
    getCompanionById,
    getDiagnostic,
    getDiagnosticById,
    getConsultation,
    getConsultationById,
    updatePacient,
    updateDoctor,
    updateCompanion,
    updateDiagnostic,
    updateConsultation,
    deletePacient,
    deleteDoctor,
    deleteCompanion,
    deleteDiagnostic,
    deleteConsultation,
    createPacient,
    createDoctor,
    createCompanion,
    createDiagnostic,
    createConsultation
}