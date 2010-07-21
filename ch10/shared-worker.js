var count = 0,
    connected = [];
    
onconnect = function(e) {
  count += 1;
  var port = e.ports[0];
  connected.push(port);
  port.postMessage('Hello World! You are connection #' + count + ' - ' + JSON.stringify(e.ports));
  port.onmessage = function(e) {
    port.postMessage('pong');
  }
}

setTimeout(function () {
  var i = connected.length;
  while (i--) {
    connected[i].postMessage('via the timer, id: ' + i);
  }
}, 1000);