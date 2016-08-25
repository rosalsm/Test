$(document).ready(function(){


  //try that when the server is working
  $("#button").click(function(event){
    $.getJSON("URL", function(rs){
      $("#result").html("<p> Artist: + rs.artist + </p>");
      $("#result").append("<p> Location: + rs.locate + </p>");
      $("#result").append("<p> Time: + rs.time + </p>");
    });


  });

  $('#changing').on('click', function(){
    $('#changing').toggleClass('change');
  });

});
