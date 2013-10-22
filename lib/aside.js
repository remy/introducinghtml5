(function(){
  var aside = function(converter) {
    return [{
      type    : 'lang',
      regex   : '({){2}aside\s*([^}}]+?)(}){2}',
      replace : function(match, prefix, content, suffix) {
        console.log('converter', converter);
        return '<aside>\n' + converter.makeHtml(content) + '\n</aside>';
      }
    }];
  };

  // Client-side export
  if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) { window.Showdown.extensions.aside = aside; }
  // Server-side export
  if (typeof module !== 'undefined') module.exports = aside;
}());