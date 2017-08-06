console.log("hi");
var http = require('http');
var httpserver = http.createServer(function(req,res){
 res.end('firt node js code')
});
httpserver.listen(1337);

var io = require('socket.io').listen(httpserver);
var userss ={}
var tabmessage =[]
io.sockets.on('connection' , function(socket){
    console.log('nauveau user')
    var me = false;
    for (var k in userss) {
      socket.emit("newuser" , userss[k]);
        
    }
    for (var k in tabmessage) {
      socket.emit("newmsg" , tabmessage[k]);
        
    }
    socket.on('login' , function(user){
          console.log(user);

            me = user ; 
            me.id = user.mail.replace('@' , '-').replace('.','-');
            me.avatar ='https://gravatar.com/avatar/'+ user.mail + '?s=50';
           //socket.broadcast.emit
            socket.emit('logged');
            userss[me.id]=me;
            io.sockets.emit("newuser" , me);
    });
    socket.on('disconnect' , function(socket){
        if(!me){
            return false;
        }
        delete userss[me.id];
        io.sockets.emit('disuser' , me);
    })
        socket.on('newmsg' , function(message){
            console.log(message);
            message.user = me ; 
            date = new Date();
            message.h = date.getHours();
            message.m = date.getMinutes();

            tabmessage.push(message);
            if(message.length > 2){
                tabmessage.shift();
            }
            io.sockets.emit('newmsg' , message);


    });
})