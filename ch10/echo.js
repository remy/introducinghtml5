(function (worker) {

worker.onmessage = function (event) {
  var rawoutput = process(event.data);

  worker.postMessage(stringify({
    html: '<li class="prompt"><strong>' + event.data + '</strong><br />'  + stringify(rawoutput).replace(/[<>]/g, function (m) { return {'>':'&gt;'}[m]||'&lt;';}) + '</li>'
    // raw: rawoutput
  }));
};

// custom because I want to be able to introspect private objects and functions
function stringify(o, simple) {
  var json = '', i, type = ({}).toString.call(o), parts = [];
  
  if (type == '[object String]') {
    json = '"' + o.replace(/"/g, '\\"') + '"';
  } else if (type == '[object Array]') {
    json = '[';
    for (i = 0; i < o.length; i++) {
      parts.push(stringify(o[i]));
    }
    json += parts.join(', ') + ']';
    json;
  } else if (type == '[object Object]') {
    json = '{';
    for (i in o) {
      parts.push(stringify(i) + ': ' + stringify(o[i]));
    }
    json += parts.join(', ') + '}';
  } else if (type == '[object Number]') {
    json = o+'';
  } else if (type == '[object Boolean]') {
    json = o ? 'true' : 'false';
  } else if (type == '[object Function]') {
    json = o.toString();
  } else if (o == null) {
    json = 'null';
  } else if (o == undefined) {
    json = 'undefined';
  } else if (simple == undefined) {
    json = o.toString() + '{\n';
    for (i in o) {
      parts.push(i + ': ' + stringify(o[i], true));
    }
    json += parts.join(',\n') + '\n}';
  } else {
    json = '"' + o + '"';
  }
  return json.replace(/\n/g, '\\n');
}

function process(string) {
  try {
    eval('string = ' + string);
  } catch (e) {
    string = e.message;
  }

  return string;
}

var console = {
  log: function (s) {
    return s;
  },
  dir: function (o) {
    var result = [o.toString() + '{'];
    for (var k in o) {
      result.push('"' + k + '": "' + o[k] + '"');
    }
    result.push('}');
    return result.join("\n");
  }
};
  
})(this);