(function(){
  'use strict';

  function incode(text, i) {
    var count = (text.substring(0, i).match(/^```(\w+)?$/mg) || []).length;

    return count % 2 !== 0;
  }

  function figureAsId(figure) {
    var parts = figure.split('.');
    if (parts.length > 1) {
      if (parts[0] * 1 < 10) {
        parts[0] = '0' + parts[0];
      }

      if (parts[1] * 1 < 10) {
        parts[1] = '0' + parts[1];
      }

      figure = parts[0] + parts[1];
    } else if (figure.length < 4) {
      // assume to prefix a zero
      figure = '0' + figure;
    }

    return figure;
  }

  var extensions = {};
  extensions.aside = function(converter) {
    return [{
      type: 'lang',
      filter: function (text) {
        return text.replace(/(?:^|\n){{aside(.*)\n([\s\S]*?)\n}}/g, function (match, prefix, content) {
          return '<aside>\n\n' + converter.makeHtml(content) + '\n\n</aside>';

        });
      }
    }];
  };

  extensions.figure = function(converter) {
    return [{
      type: 'lang',
      filter: function (text) {
        return text.replace(/({){2}figure\s*([\d\.]+)\s*([^}}]+?)(}){2}/gm, function (match, prefix, figure, content) {
          figure = figureAsId(figure);
          return '<figure id="figure' + figure + '"><img src="/images/figures/fig' + figure + '.png"><figcaption>' + converter.makeHtml(content).trim() + '</figcaption></figure>';
        });
      }
    }];
  };


  extensions.dash = function() {
    return [{
      type    : 'lang',
      filter: function (text) {
        // incode(text);
        return text.replace(/(\s*)(-){2}(\s*)/g, function (match, a, b, c, i) {
          if (!incode(text, i)) {
            var ndash = match[0] === ' ';
            return (ndash ? ' ' : '') + '&' + (ndash ? 'n' : 'm') + 'dash;' + (ndash ? ' ' : '');
          } else {
            return match;
          }
        });
      }
    }];
  };

  extensions.ellipsis = function() {
    return [{
      type    : 'lang',
      filter: function (text) {
        // incode(text);
        return text.replace(/(\s*)(\.){3}(\s*)/g, function (match, a, b, c, i) {
          if (!incode(text, i)) {
            return '&hellip;';
          } else {
            return match;
          }
        });
      }
    }];
  };

  extensions.figureLink = function() {
    return [{
      type    : 'lang',
      filter: function (text) {
        // incode(text);
        return text.replace(/Figure (\d+\.\d+)/ig, function (match, figure) {
          return '<a href="#figure' + figureAsId(figure) + '">Figure ' + figure + '</a>';
        });
      }
    }];
  };

  // FIXME should not apply inside code tag
  extensions.quotes = function () {
    var map = {
      '"': { isopen: false, open : '“', close: '”' },
      '\'': { isopen: false, open :'‘', close: '’' }
    };

    return [{
      // stupid hack that resets the open states once the
      // markdown has finished.
      type: 'output',
      filter: function (text) {
        map['"'].isopen = false;
        map['\''].isopen = false;
        return text;
      }
    },
    {
      type: 'lang',
      // regex: '(.){0,1}(["\'])',
      filter: function (text) {
        // var open = false;
        // console.log('all', all);
        return text.replace(/(.){0,1}(["\'])/g, function (match, prefix, quote, i) {
          if (incode(text, i)) {
            return match;
          }

          if (prefix === undefined) {
            prefix = '';
          }
          if (map[quote].isopen === false && prefix !== ' ') {
            return prefix + map[quote].close;
          }

          if (map[quote].isopen) {
            map[quote].isopen = false;
            return prefix + map[quote].close;
          } else {
            map[quote].isopen = true;
            return prefix + map[quote].open;
          }
        });
      }
    }];
  };


  //--- export

  // Client-side export
  if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) {
    window.Showdown.extensions = extensions;
  }
  // Server-side export
  if (typeof module !== 'undefined') { module.exports = extensions; }
}());
