var express = require('express'),
    hbs = require ('hbs'),
    // markdown = require('markdown').markdown,
    Showdown = require('showdown'),
    extensions = require('./lib/mdExtensions'),
    converter = new Showdown.converter({
      extensions: [extensions.dash, extensions.quotes, extensions.aside, extensions.figure, extensions.ellipsis]
    }),
    fs = require('fs'),
    path = require('path'),
    app = express();

app.configure(function () {
  logger = process.env.LOGGER || 'tiny';

  if (logger !== 'none') {
    app.use(express.logger(logger));
  }

  app.set('views', 'views');
  app.set('view engine', 'html');
  app.engine('html', require('hbs').__express);

  // Redirect gist.jsbin urls to /gist/:id
  app.use(express.static('public'));
  app.use(express.cookieParser(app.set('session secret')));
});

app.configure('development', function () {
  // TODO generate this to static assets
  app.get('/chapter/:chapter', function (req, res, next) {
    var chapter = req.params.chapter; //parseInt(req.params.chapter) || 1;
    fs.readFile(path.join('chapters', chapter + '.md'), 'utf8', function (err, content) {
      if (err) {
        return res.status(404).send('Not found');
      }

      res.render('chapter', {
        body: converter.makeHtml(content)
      });
    });
  });
})

app.listen(process.env.PORT || 8000);