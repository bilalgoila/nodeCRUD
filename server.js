const express = require('express');

const app = express();

app.use(express.json());

const postRote = require('./app/routes/route');


app.use('/', postRote);

app.listen(3000);