require('./db');

const express = require('express');
const routes = require('./routes');
const swagger = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');
const bodyParser = require('body-parser');
const { verifyToken } = require('./auth/token');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use('/', verifyToken, routes);
app.use('/', routes);
app.use('/api-docs', swagger.serve, swagger.setup(swaggerDoc));

app.listen(3000, () => {
  console.log(`node app running on http://localhost:3000`);
});
