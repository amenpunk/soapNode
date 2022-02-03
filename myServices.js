let myService = {
    MyServices: { // service name : 43
        MyPort: { // port binding : 46
            sayHello : function(args){ // operation
                console.log(args)
                return '1';
            },
        }
    }
}

module.exports = { myService }
