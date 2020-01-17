const express = require('express');
const path =  require('path');
const serveStatic = require('serve-static');

app = express();
app.use(serveStatic(__dirname + '/dist'));
const port = process.env.PORT || 5005;

app.listen(port);
console.log('Server started at port: ' + port);