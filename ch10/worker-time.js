setInterval(function () {
  var d = new Date();
  if ((d.getSeconds() % 5) == 0) {
    postMessage('Exactly: ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());
  }
}, 10);