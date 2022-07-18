const express = require('express');
const app = express();
const formidableConf = require('express-formidable');
const routerConfig = require('./route.config.js');
const PORT = process.env.PORT || 9090;

app.use(formidableConf());

app.use(routerConfig);

app.listen(PORT, () => {
    console.info(`Server running at port : ${PORT}`);
})