ws = new WebSocket("ws://173.203.209.115:8080/");
ws.onmessage = function(evt) { 
  console.log(evt.data);
  var data = JSON.parse(evt.data);
  var p = $(twitterlib.render(data));
  if( $('#tweets > li').length > 15) {
    $('#tweets >li:last').slideDown(100, function() {
      $(this).remove();
    });
  }
  
  $('#tweets').prepend(p);
  p.slideDown(140);
};
ws.onclose = function() {
  alert("socket closed");
};
ws.onopen = function() {
  //alert("connected...");
};
