var btnClassClick = function(e){
    alert("Button clicked from class: "+e.currentTarget.id);
}

$("#sub").click( function() {
 $('.btn-click-action').on('click', btnClassClick);
 $("#post_id").val($(this).attr('id'));
 $.post( $("#myForm").attr("action"), 
         $("#myForm :input").serializeArray(), 
         function(info){ $("#result").html(info); 
   });
  var username = $("#user_name").val();
  $("#commentlist").append('<li class="photo__comment"><span class="photo__comment-author">'+$("#user_name").val()+'</span>'+$("#comment").val()+'</li>');

 clearInput();
 //comments();
});
 
$("#myForm").submit( function() {
 
  return false;
});
 
function clearInput() {
$("#myForm :input").each( function() {
   $(this).val('');
});
}