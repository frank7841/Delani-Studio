$(function(){
    $("#design-image").click(function(){
        $("#design-image").hide();
        $("#design").show();
      });
      $("#design").click(function(){
        $("#design").hide();
        $("#design-image").show();
      });
      $("#development-image").click(function(){
        $("#development-image").hide();
        $("#development").show();
      });
      $("#development").click(function(){
        $("#development").hide();
        $("#development-image").show();
      });
      $("#product-image").click(function(){
        $("#product-image").hide();
        $("#product").show();
      });
      $("#product").click(function(){
        $("#product").hide();
        $("#product-image").show();
      });
      $("#work1").mouseover(function(){
        $("#overlay").show();
      }).mouseout(function(){
        $("#overlay").hide();
      });
      $("#work2").mouseover(function(){
        $("#overlay2").show();
      }).mouseout(function(){
        $("#overlay2").hide();
      });
      $("#work3").mouseover(function(){
        $("#overlay3").show();
      }).mouseout(function(){
        $("#overlay3").hide();
      });
      $("#work4").mouseover(function(){
        $("#overlay4").show();
      }).mouseout(function(){
        $("#overlay4").hide();
      });
      $("#work5").mouseover(function(){
        $("#overlay5").show();
      }).mouseout(function(){
        $("#overlay5").hide();
      });
      $("#work6").mouseover(function(){
        $("#overlay6").show();
      }).mouseout(function(){
        $("#overlay6").hide();
      });
      $("#work7").mouseover(function(){
        $("#overlay7").show();
      }).mouseout(function(){
        $("#overlay7").hide();
      });
      $("#work8").mouseover(function(){
        $("#overlay8").show();
      }).mouseout(function(){
        $("#overlay8").hide();
      });
      $("form#myform").submit(function(event){
        // event.preventDefault();
        var name = $("input#merge1").val();
        var email = $("input#merge0").val();
        var message = $("textarea#comment").val();
        if ($("input#merge1").val() && $("input#merge0").val()){
          alert (name + ", we have received your message. Thank you for reaching out to us.");
        }
        else {
          alert("Please enter your name and email!");
        }
        
      });
});