var socket = new WebSocket("ws://my-chat-server.com:8080/"),
    me = getUsername();
    
socket.onmessage = function(event) { 
  var data = JSON.parse(event.data);
  
  if (data.action == 'joined') {
    initiliseChat();
  } else {
    showNewMessage(data.who, data.text);
  }
};

socket.onclose = function () {
  socket.send(JSON.stringify({
    action: 'logoff',
    username: me
  }));
  showDisconnectMsg();
};

socket.onopen = function() {
  socket.send(JSON.stringify({
    action: 'join',
    username: me
  }));
};
