var worker = this;

onerror = function () {
  postMessage([].slice.call(arguments, 0).join(', '));
};

onmessage = function (event) {
  var message = '<li class="prompt"><strong>' + event.data + '</strong></li>',
      rawoutput = process(event.data);
      
  postMessage(JSON.stringify({
    html: message + '<li>' + JSON.parse(rawoutput) + '</li>',
    raw: rawoutput
  }));
};

function process(string) {
  var method = string.split(':')[0],
      methods = {
        run: function (s) {
          try {
            return worker[s]();
          } catch (e) {
            return 'error calling "' + s + '": ' + e.description;
          }
        },
        'typeof': function (s) {
          return typeof worker[s];
        },
        dir: function (s) {
          return worker[s];
        }
      };
  
  if (methods[method] != undefined) {
    string = methods[method](string.substr((method+':').length));
  } else {
    eval('string = ' + string);
  }
  
  return JSON.stringify(string);
}

var console = {
  log: function () {
    postMessage(JSON.stringify({ run: 'log', raw: JSON.stringify([].slice.call(arguments, 0)) }));
  }
};