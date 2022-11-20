const express = require('express');
const app = express();
const routerApi = require('./routes')

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
routerApi(app);
// app.use(require('./routes/index'));

app.listen(3000);
console.log('Server on port 3000');