
$(document).ready(function(){

  
  $(".mensalidade ul, .mensalidade a").hide();


  $(".mensalidade, .mensalidade #btn-mostrar").on("click", function(e){
    e.preventDefault();


    $(".mensalidade").not($(this).closest(".mensalidade"))
                     .removeClass("ativo")
                     .find("ul, a")
                     .slideUp(300);

    const card = $(this).closest(".mensalidade");

    
    if(card.hasClass("ativo")){
      card.removeClass("ativo");
      card.find("ul, a").slideUp(300);
    } else {
      card.addClass("ativo");
      card.find("ul, a").slideDown(400);
    }
  });

});
