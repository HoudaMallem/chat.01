var views ={
    CreateOneMessage : function(message){

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
       // return 
    },
    AddUser : function(user){
        $('#users').append('<img width="20px; " src="'+user.avatar+'" id="'+user.id+'"/> ')
        $('#users').append('<strong>'+user.username+'</strong>')
        $('#users').append('<br/> ') 
    },   
    RemoveUser : function(user){
        $('#'+user.id).remove();
    },   
    AddSeparation : function(){


         
    },
    HindeModal : function(){
        $('.ui.basic.modal').modal('hide');
    }
     
}