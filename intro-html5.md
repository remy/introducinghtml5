Markdown conversion process:

1. Any __ means the word was mixed case, so it could be code, or could be a typo. It also appears in the code examples, just remove them from the code blocks.

2. All code in paragraphs should be wrapped in backticks, i.e. `<div>`

3. Wrap multiline blocks of code in three backticks: ```

4. Some sentences will be broken in two, so fix

5. Clean up code samples - they often lose their tabbing and include extra newlines.

6. `{{figure 1.2` is correct, leave these as they are - they'll be magically replaced with the actual figure image.

7. The "aside" blocks are start with `{{aside` and end with `}}`, and the heading is an h1 (single # character).

8. Heading: large blue headings from the book are h2 (##) then level down from there.

9. Links are often broken, remove extra spaces, etc and fix up, i.e. this appears in chapter 1: `We recommend using[ http://validator.w3.org/]( http://validator.w3.org/) or[ http://html5.validator.nu]( http://html5.validator.nu).` change to `We recommend using [http://validator.w3.org/]( http://validator.w3.org/) or [http://html5.validator.nu](http://html5.validator.nu).`

10. Tables are fucking nightmare. You *can* do markdown tables, or just use HTML tables (with a thead and tbody), no classes neccessary.

11. CSS code blocks get mistaken from links, so go ahead and fix those entirely.

12. Side notes are marked up as `>` (blockquote...), if they're multiline, just add the `>` character to the start of each line.