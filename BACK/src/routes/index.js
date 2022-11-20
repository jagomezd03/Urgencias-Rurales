const express = require('express');

const patientRouter = require('./patient.router');
const doctorRouter = require('./doctor.router');
const diagnosticRouter = require('./diagnostic.router');
const consultationRouter = require('./consultation.router');
const companionRouter = require('./companion.router');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/patient', patientRouter);
    router.use('/doctor', doctorRouter);
    router.use('/diagnostic', diagnosticRouter);
    router.use('/consultation', consultationRouter);
    router.use('/companion', companionRouter);
}

module.exports = routerApi;