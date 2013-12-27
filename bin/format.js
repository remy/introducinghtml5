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

fs.writeFileSync(filename + '-backup' + Date.now(), content, 'utf8');

var incode = false;
var ignoreWords = 'IndexedDB currentTime iPhone JavaScript FlashCanvas APIs URLs iVBORw0KGgoAAAANSUhEUgAAAAoAAAAK jQuery preventDefault iOS WebKit PhoneGap DOMString'.split(' ');
var lines = content.split('\n');

content = lines.map(function (line, i) {
  // skip blank lines
  if (line.trim() === '') {
    return line;
  }

  if (line.indexOf('```') === 0) {
    incode = !incode;
  }

  // replace quotes
  line = line.replace(/[’‘]/g, '\'');

  line = line.replace(/[“”]/g, '"');


  // line separators
  line = line.replace(/ ¬ /g, '\n');

  // objects from pdfs
  line = line.replace(/￼/g, '');

  line = line.replace(/• /g, '- ');

  // ignore formatting whilst inside code blocks
  if (incode) {
    return line;
  }

  // strip dashes
  line = line.replace(/(.)- /g, '$1');
  line = line.replace(/—/g, '--');

  // add blank lines for paragraphs
  if (i < lines.length -1 && lines[i+1].trim() !== '' && line.indexOf('- ') !== 0) {
    line += '\n';
  }

  // linkify
  // http[\w#!:.?+=&%@!\-\/]+\s
  line = line.replace(/.((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/g, function (m) {
    var c = m.substr(0, 1);
    if (c === '[' || c === '(') { // already markdown
      return m;
    }

    if (m.slice(-1) === '.') {
      m = m.slice(0, -1);
      return '[' + m + '](' + m + ').';
    }

    return '[' + m + '](' + m + ')';
  });

  // sometimes there's formatting errors like "INTRoDUCiNG" so flag these up
  line = line.replace(/([\s|`])?(\w+[A-Z]\w*)\b/g, function (m, space, word) {
    if (word.indexOf('__') === 0) {
      // we've done this word already, so skip it (in case we re-run)
      return m;
    }

    // ignore code string
    if (space === '`') {
      return m;
    }

    if (word === 'FIguRE') {
      return 'Figure';
    }

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

    if (!allupper && ignoreWords.indexOf(word) === -1) {
      console.log(m);
      return (space||'') + '__' + m.trim() + '__';
    } else {
      return m;
    }
  });


  // figure line
  if (line.indexOf('Figure') === 0 && lines[i - 1].indexOf('{{') !== 0 && lines[i - 2].indexOf('{{') !== 0) {
    line = line.replace(/Figure (\d+\.\d+)(.*)/, function (all, fignum) {
      return '{{figure ' + fignum + '\n' + all + '\n}}';
    });
  }

  return line;
}).join('\n');


fs.writeFile(filename, content, 'utf8');
console.log('Done');