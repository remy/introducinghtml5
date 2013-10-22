(function(){
  var extensions = {};
  extensions.aside = function(converter) {
    return [{
      type: 'lang',
      filter: function (text) {
        return text.replace(/({){2}aside\s*([^}}]+?)(}){2}/gm, function (match, prefix, content) {
          return '<aside>\n\n' + converter.makeHtml(content) + '\n\n</aside>';
        });
      }
    }];
  };

  extensions.dash = function(converter) {
    return [{
      type    : 'lang',
      filter: function (text) {
        return text.replace(/(\s*)(-){2}(\s*)/g, function (match) {
          var ndash = match[0] === ' ';
          return (ndash ? ' ' : '') + '&' + (ndash ? 'n' : 'm') + 'dash;' + (ndash ? ' ' : '');
        });
      }
    }];
  };

  extensions.quotes = function (converter) {
    var map = {
      '"': { isopen: false, open : "“", close: "”" },
      "'": { isopen: false, open :"‘", close: "’" }
    };

    return [{
      // stupid hack that resets the open states once the
      // markdown has finished.
      type: 'output',
      filter: function (text) {
        map['"'].isopen = false;
        map["'"].isopen = false;
        return text;
      }
    },
    {
      type: 'lang',
      regex: '(.){0,1}(["\'])',
      replace: function (match, prefix, quote) {
        // var open = false;
        // console.log('all', all);
        // return all.replace(/(.){0,1}(['"])/g, function (match, prefix, quote) {
          if (prefix === undefined) prefix = '';
          if (map[quote].isopen == false && prefix != ' ') {
            if (quote === '"') {

          console.log('match >' + match + '<');
          console.log('prefix >' +  prefix + '<');
          console.log('quote >' +  quote + '<');
            }
            // console.log('PREFIX NOT SPACE: >' + prefix + '<');
            return prefix + map[quote].close;
          }

          if (map[quote].isopen) {
            map[quote].isopen = false;
            return prefix + map[quote].close;
          } else {
            map[quote].isopen = true;
            return prefix + map[quote].open;
          }
        // });
      }
    }];
  };


  //--- export

  // Client-side export
  if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) {
    window.Showdown.extensions = extensions;
  }
  // Server-side export
  if (typeof module !== 'undefined') module.exports = extensions;
}());
