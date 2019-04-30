//cheaking off some specific  clicking elements
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//click on x to delete an // TODO:
//There is phenomina called bubbleing to stop this we use a function called
//event.stopPropagation():
$("ul").on("click", "span",function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(){
  if (event.which===13) {
    //grabbing new todo text from the input
    var todoText = $(this).val();
    $(this).val("");
    //Create a new todo to the app
    $("ul").append("<li><span>X </span>" + todoText+ "</li>");
  }
});
