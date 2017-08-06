(function($){
     
   var socket = io.connect("http://localhost:1337");
    $('#loginform').submit(function(event){
        event.preventDefault();
        socket.emit('login' , {
            username : $('#username').val(),
            mail : $('#mail').val()
        })
        });
        socket.on('newuser' , function(user){   
          
            $('#users').append('<img src="'+user.avatar+'" id="'+user.id+'"/>')
        
        });
            socket.on('logged' , function(user){   
           //alert("new user");
           $('.ui.basic.modal').modal('hide');
            //$('#loginbloc').hide();
//console.log("eee");
  //  $('.ui.basic.modal').modal('hide', function(){
                  //  $('.ui.basic.modal').modal('hide')
         //       });
        
        });
          socket.on('disuser' , function(user){   
           // alert("new user");
            $('#'+user.id).remove();
        
        });
        socket.on('newmsg' , function(message){   
           // alert("new user");
            $('#divmessage').append("<div class='ui olive segment' >"+message.message+"</div>");
        
        });
            $('#mesfor').submit(function(event){
        event.preventDefault();
              socket.emit('newmsg' , {
            message : $('#message').val()
        })
        $('#message').val('');
        $('#message').focus();
  
        });
})(jQuery);