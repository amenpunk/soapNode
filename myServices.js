let myService = {
    MyServices: { // service name : 43
        MyPort: { // port binding : 46
            sayHello : function(args){ // operation
                console.log(args)
                return '1';
            },
            sayMyName : function(args){ // operation
                console.log('request parameters >>' ,args)
                return {
                   saludo :'Hello ' + args.nombre
                }
            },
        }
    }
}

module.exports = { myService }
