'use strict';

var fs = require('fs'),
    path = require('path'),
    file = process.argv[2],
    filename = path.resolve(file);

if (!file || !fs.existsSync(filename)) {
  console.log('Usage: node bin/format.js chapter/n.md');
  process.exit(1);
}

var content = fs.readFileSync(filename, 'utf8');

fs.writeFileSync(filename + Date.now(), content, 'utf8');

// replace quotes
content = content.replace(/’/g, '\'');

content = content.replace(/[“”]/g, '"');

// strip dashes
content = content.replace(/(.)- /g, '$1');
content = content.replace(/—/g, '--');

// add blank lines for paragraphs
content = content.replace(/(\n\n)/g, '^^');
content = content.replace(/\n/g, '\n\n');
content = content.replace(/(\^\^)/g, '\n\n');

var ignoreWords = ['iPhone'];

content = content.replace(/\b(\w+[A-Z]\w*)\b/g, function (m) {
  var letters = m.replace(/[^a-z]/ig, ''),
      allupper = true;
  for (var i = 0; i < letters.length; i++) {
    if (letters.substr(i, 1) === letters.substr(i, 1).toUpperCase()) {
      allupper = true;
    } else {
      allupper = false;
    }

    if (allupper === false) {
      break;
    }
  }

  if (!allupper && ignoreWords.indexOf(m) === -1) {
    console.log(m);
    return '__' + m + '__';
  } else {
    return m;
  }
});

fs.writeFile(filename, content, 'utf8');
console.log('Done');