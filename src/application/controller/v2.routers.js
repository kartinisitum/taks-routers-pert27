const express = require('express');
const app = express();

app.get('/',function (req,res){
    res.send ({message: 'jenis product dari method get '});
});

app.post ('/',function (req,res){
    res.send ({message: 'jenis product dari method post '});
});

app.put ('/',function (req,res){
    res.send ({message: 'jenis product dari method put  '});
});

app.patch ('/',function (req,res){
    res.send ({message: 'jenis product dari method patch '});
});

app.delete ('/',function (req,res){
    res.send ({message: 'jenis product dari method delete '});
});

app.get('/',function (req,res){
    res.send ({message: ' product '});
});



module.exports = app;