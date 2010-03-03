var yourtimeEl = document.getElementById('yourtime'),
    servertimeEl = document.getElementById('servertime'),
    startTime = new Date().getTime(),
    liveServerTime = typeof servertime == "number";

(function () {
  var t = new Date(),
      d = t.getTime() - startTime;
  
  yourtimeEl.innerHTML = niceTime(t);
  servertimeEl.innerHTML = liveServerTime ? niceTime(new Date(servertime + d)) : servertime;
  
  setTimeout(arguments.callee, 1000);
})();

function niceTime(t) {
  return t.getHours() + ':' + two(t.getMinutes()) + ':' + two(t.getSeconds());
}

function two(s) {
  return (s+'').length == 2 ? s : '0' + s;
}
