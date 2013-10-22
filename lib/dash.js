(function(){
  var dash = function(converter) {
    return [{
      type    : 'lang',
      regex   : '(\\s*)(-){2}(\\s*)',
      replace : function(match, prefix, content, suffix) {
        var ndash = match[0] === ' ';
        return (ndash ? ' ' : '') + '&' + (ndash ? 'n' : 'm') + 'dash;' + (ndash ? ' ' : '');
      }
    }];
  };

  // Client-side export
  if (typeof window !== 'undefined' && window.Showdown && window.Showdown.extensions) { window.Showdown.extensions.dash = dash; }
  // Server-side export
  if (typeof module !== 'undefined') module.exports = dash;
}());