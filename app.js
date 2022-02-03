const soap = require('soap')
const express = require('express')
const bodyParser = require('body-parser')

const wsdl = require('fs').readFileSync('myservice.wsdl', 'utf8');
const { myService } = require('./myServices');

var app = express();

app.use(bodyParser.raw({type: function(){return true;}, limit: '5mb'}));
app.listen(8080, function(){

    let server = soap.listen(app, '/wsdl', myService ,wsdl , function(){
        console.log('server initialized on port -> ', 8080  );
    });

    server.log = function (type, data) {
        console.log('SOAP >>', type, data)
    }

    server.on('headers', function(headers, methodName) {
        console.log(header, (methodName))
    });

});


// /home/ming/WORKSPACE/SOPA_EXAMPLE/myservice.wsdl
