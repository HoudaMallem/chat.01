(function($){
   var socket = io.connect("http://localhost:2000");
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
     //   var latsUser =false;
     var me = 0 ; 
        socket.on('newuser' , function(user , moi ){
            if(!me){
                me = moi;
            }
          //  alert(me.username)
            console.log(moi);
       //     if(!latsUser){
         //       latsUser = user;
           // }   
            views.AddUser(user);
        });
        socket.on('logged' , function(user){   
           views.HindeModal(); 
        });
        socket.on('disuser' , function(user){   
           views.RemoveUser(user); 
        });
        socket.on('newmsg' , function(message  ){   
          
            views.CreateOneMessage(message , me);
          
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