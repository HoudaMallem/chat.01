var views ={
    CreateOneMessage : function(message ,me){

                    var blockmessage=document.getElementById("divmessage"); 
                    var div = document.createElement('div');
                        blockmessage.appendChild(div);
                       // div.setAttribute("class",'ui olive segment');
                      //  alert("me :" + me );
                            alert("me :" + me.username );
                           alert(" user message "+message.user.username );
                       if(message.user.username != me.username){
                           
                           // div.setAttribute("class",'ui attached right aligned icon  message');
                           div.setAttribute("class",'ui right aligned segment');
                       }else{
                            //div.setAttribute("class",'ui attached icon  message');
                           div.setAttribute("class",'ui segment');
                       }
                       
                       
                    var image = document.createElement('img');
                        image.setAttribute("width",'20');
                        image.setAttribute("style",'margin-right:20px');
                        image.setAttribute("src",message.user.avatar);
                        div.append(image);
                        div.append(message.user.username);
                        var quand = document.createElement('span');
                        quand.setAttribute("class",'right');
                      //  quand.children(message.h+ '  ' +message.m);
                        quand.value = message.h+ '  ' +message.m;
                                div.appendChild(quand);
                        var br = document.createElement('br');
                        div.appendChild(br);
                        div.append(message.message);
       // return 
    },
    AddUser : function(user){
       $('#usertitle').html(user.username);
        $('#users').append('<div class="ui red segment" id="'+user.id+'"><img width="20px; " src="'+user.avatar+'" /> ')
        $('#users').append('<label>'+user.username+'</label>')
        $('#users').append('</div>') 
    },   
    RemoveUser : function(user){
        $('#'+user.id).remove();
       //  $('#'+user.id).remove();
    },   
    AddSeparation : function(){


         
    },
    HindeModal : function(){
        $('.ui.basic.modal').modal('hide');
    }
     
}