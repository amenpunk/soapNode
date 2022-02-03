const soap = require('soap')
const express = require('express')
const bodyParser = require('body-parser')

const wsdl = require('fs').readFileSync('myservice.wsdl', 'utf8');
const myServices = require('./myServices')

//express server example
var app = express();
//body parser middleware are supported (optional)
app.use(bodyParser.raw({type: function(){return true;}, limit: '5mb'}));
app.listen(8080, function(){
    //Note: /wsdl route will be handled by soap module
    //and all other routes & middleware will continue to work
    soap.listen(app, '/wsdl', myServices, wsdl , function(){
        console.log('server initialized on port -> ', 8080  );
        // console.log(Object.keys(app))
    });

    soap.log = function (type, data) {
        console.log('SOAP >>', type, data)
    }


});


