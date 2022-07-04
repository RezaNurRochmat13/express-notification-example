const express = require('express');
const app = express();
const formidableConf = require('express-formidable');
const routerConfig = require('./route.config.js');

app.use(formidableConf());
app.use(routerConfig);

app.listen(9000, () => {
    console.info(`Server running at port : ${9000}`);
})