# Introducing HTML5 online book

## Stuff you need

* Git to commit changes to the book
* Knowledge of our special markdown and formatting requirements
* Node to test the rendering of the book
* Heroku account (TODO)

Create chapter files as `chaters/1.md`, the `1` being the chapter number.

Put all images in `public/images/`.

## Checking the project out

You'll need to use git to commit changes to the book. You

```bash
git checkout origin/feature/book
git checkout -b feature/book
```

Now you have the `feature/book` branch (and you're commiting to a branch by the same name).

Once you've made a change, push it back to the repository using:

```bash
git push origin feature/book
```

## Markdown format

It's easiest to look at [chapter 1](https://raw.github.com/remy/introducinghtml5/feature/book/chapters/1.md) as the example.

### Title of the chapter gets an h1 (single `#`)

```markdown
# Chapter 1 Welcome
```

### Headings then decend from h2 downwards as per the book

```markdown
## Who? What? When? Why? A short history of HTML5

History sections in computer books usually annoy us. You don't need to know about ARPANET or the history of HTTP to understand how to write a new language.

### How HTML5 nearly never was

In 1998, the W3C decided that they would...
```

### Use strong and emphasis

```markdown
*This* is emphasis, but **this** is strong/important.
```

### Inline code examples in backticks

```markdown
We can use a JavaScript `alert` when we want to annoy users
```

### Code blocks starts have 3 backticks on a line


    Then we had some code with the language after the 3 ticks:

    ```js
    fs.readFile(path.join('chapters', chapter + '.md'), 'utf8', function (err, content) {
      if (err) {
        return res.status(404).send('Not found');
      }
    });
    ```

    And that's the code example.

Note the closing 3 backticks on a line by themselves.

HTML code examples - so long as they're inside backticks should not need escaping

### Sidebars / asides

Uses special syntax:

```
{{aside
# This actually uses a h1 for the heading

Then regular sytnax is allowed inside. But then we have to close off with two } characters.

}}
```

### Dashes

Hyphen's a dashes are supported. A hyphen is simply `-` and a dash is `--`.

Note that the PDF includes lots of hyphen characters (and some other odd characters that look like hyphens but aren't). Ensure to remove these and either join the word (when it's been split) or change the character for a plain hyphen character.

### Quotes

Ensure "special" quotes are not used. Replace all these with single quotations or double quotations. The renderer will replace these upon render so they look nice.

## Node

Install node. Then inside the introducing html5 cloned directory, in the terminal run:

```bash
npm install
node .
```

Now visit http://localhost:8000/chapter/1 in your browser. Note that you'll need to navigate the urls manually.


