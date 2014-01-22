var $ = function (s) {
  'use strict';
  return document.querySelectorAll(s);
};

function link(id) {
  'use strict';
  var e = document.createElement('a');
  e.className = 'permalink';
  e.href = e.innerHTML = '#' + id;
  return e;
}

[].forEach.call($('h1,h2,h3,h4,h5,h6'), function (el) {
  'use strict';
  if (el.id) {
    el.appendChild(link(el.id));
  }
});