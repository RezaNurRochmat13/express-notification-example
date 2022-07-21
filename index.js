const express = require('express');
const morgan = require('morgan');
const app = express();
const formidableConf = require('express-formidable');
const routerConfig = require('./route.config.js');
const PORT = process.env.PORT || 9090;

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(formidableConf());
app.use(routerConfig);


app.get('/', (request, response) => {
    response.json({message: "Service up"});
});

app.listen(PORT, () => {
    console.info(`Server running at port : ${PORT}`);
})