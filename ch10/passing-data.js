onmessage = function (event) {
  postMessage(JSON.stringify(JSON.parse(event.data)));
}

onconnect = function () {
  postMessage('Hello!');
}