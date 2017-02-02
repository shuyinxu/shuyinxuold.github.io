$(document).ready(function() {
  function open() {
      document.getElementById("navbar1").style.width = "100%";
  }

  function close() {
      document.getElementById("navbar1").style.width = "0%";
  }

  $( "#navbar" ).hover(function() {
      if ($(this).hasClass( "open-side" )){
        $( this ).removeClass( "open-side" );
        $( this ).addClass( "normal" );

        $( "#grids" ).removeClass( "out" );

      }
      else{
          $( this ).addClass( "open-side" );
          $( this ).removeClass( "normal" );
          $( "#grids" ).addClass( "out" );
      }


      if ($("#grids").hasClass( "original" )){
        $("#grids").removeClass( "original" );


    }
    else if ($("#grids").hasClass( "in" )){
      $("#grids").removeClass( "in" );
      $("#grids").addClass( "out" );


    }
    else{
        $("#grids").addClass( "in" );
        $("#grids").removeClass( "out" );
    }

    }
  );
  $( "#navbar" ).hover(function() {
    if ($("#holder").hasClass( "open-side" )){
      $("#holder").removeClass( "open-side" );
      $("#holder").addClass( "normal2" );



    }
    else{
        $("#holder").addClass( "open-side" );
        $("#holder").removeClass( "normal2" );

    }
      });
  $('#aboutpage').on('click', function(){
      $("#about").addClass('open-top');
      $("#aboutpage").addClass('selected');
      $("#welcome").fadeOut();


  })
  $( "#nav" ).click(function() {
    if ($("#about").hasClass( "open-top" )){
      $("#about").removeClass( "open-top" );
      $("#resume").removeClass('selected');
      $("#aboutpage").removeClass('selected');

}
  $("#welcome").fadeIn(3000);
  $(".airplane").fadeOut();
  TweenMax.to(".airplane", 2, {x: -700, y: 550, rotation: -30, scale: 1, delay: 1});

      });

    $( "#resume" ).click(function() {
        $("#resume").addClass('selected');
        $(".airplane").show(2);
        $("#welcome").fadeOut();
        TweenMax.to(".airplane", 2, {x: 800, y: -510, rotation: 35, scale: 2.2});
      });



});
