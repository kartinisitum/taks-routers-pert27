const express = require('express');
const routers1 = require ('./src/aplication/v1.routers');
const routers2 = require ('./src/aplication/v2.routers');
const app = express();

app.use('/',routerv1)
app.use('/api/v1',routerv1);
app.use('/api/v2',routerv2);


const PORT = 3000;
app.listen(PORT);
console.log('aplication running on port',PORT);