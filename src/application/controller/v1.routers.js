const express = require(express);
const app = express.router();

dataProductCrtl = require('/controller/dataProduct')
app.get('/',function(req,res){
res.send({message: 'data  product dari method get '});
});
app.get('/nama', function(req,res){});
app.get('/id', function(req,res){});
app.get('/harga', function(req,res){});
app.get('/barcode', function(req,res){});

module.exports =app;

