(function($){
     
   var socket = io.connect("http://localhost:1337");
    $('#loginform').submit(function(event){
        event.preventDefault();
        if($('#username').val() !='' && $('#mail').val()!=''){
            socket.emit('login' , {
                username : $('#username').val(),
                mail : $('#mail').val()
            })
        }else{
            alert('veuillez insérer le nom et l email svp')
        }

        });
        socket.on('newuser' , function(user){   
          
            $('#users').append('<img width="20px; " src="'+user.avatar+'" id="'+user.id+'"/> ')
                    $('#users').append('<strong>'+user.username+'</strong>')
                            $('#users').append('<br/> ')
        
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
            console.log(message);
         //   $('#divmessage').append("<div class='ui olive segment onemesssage' >");
                    var blockmessage=document.getElementById("divmessage"); 
                    var div = document.createElement('div');
                        blockmessage.appendChild(div);
                        div.setAttribute("class",'ui olive segment');
                    var image = document.createElement('img');
                        image.setAttribute("width",'20');
                        image.setAttribute("style",'margin-right:20px');
                        image.setAttribute("src",message.user.avatar);
                        div.append(image);
                        div.append(message.user.username);
                        var br = document.createElement('br');
                        div.appendChild(br);
                        div.append(message.message);

      /*        var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode("Hi there and greetings!"); 
  newDiv.appendChild(newContent);
                   $('.onemesssage').append('<img width="20px; " src="'+message.user.avatar+'" /> ')
                   $('.onemesssage').append(message.user.username);
                            $('.onemesssage').append("</br>");
                        $('.onemesssage').append(message.message);
                           $('#divmessage').append("</div >");
        */
        });
        $('#mesfor').submit(function(event){
            if( $('#message').val() !=''){
                event.preventDefault();
                    socket.emit('newmsg' , {
                    message : $('#message').val()
                })
                $('#message').val('');
                $('#message').focus();
            }

  
        });
})(jQuery);