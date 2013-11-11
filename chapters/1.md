# Introduction

Welcome to the Remy and Bruce show. We're two developers who have been playing with HTML5 since Christmas 2008 experimenting, participating in the mailing list, and generally trying to help shape the language as well as learn it.

Because we're developers, we're interested in building things. That's why this book concentrates on the problems that HTML5 can solve, rather than an academic investigation of the language. It's worth noting, too, that although Bruce works for Opera Software, which began the proof of concept that eventually led to HTML5, he's not part of the specification team there; his interest is as an author using the language.

## Who's this book for?

No knowledge of HTML5 is assumed, but we expect you're an experienced (X)HTML author, familiar with the concepts of semantic markup. It doesn't matter whether you're more familiar with HTML or XHTML doctypes, but you should be happy coding any kind of strict markup.

While you don't need to be a JavaScript ninja, you should have an understanding of the increasingly important role it plays in modern web development, and terms like DOM and API won't make you drop this book in terror and run away.

Still here? Good.

## What this book isn't

This book is not a reference book. We don't go through each element or API in a linear fashion, discussing each fully and then moving on. The specification does that job in mind-numbing, tear-jerking, but absolutely essential detail.

What the specification doesn't try to do is teach how to use each element or API or how they work in the context of each other. We'll build up examples, discussing new topics as we go, and return to them later when there are new things to note.

You'll also realise, from the title and the fact that you're comfortably holding this book without requiring a forklift, that this book is not comprehensive. Explaining a specification that needs 900 pages to print (by comparison, the first HTML spec was three pages long) in a medium-sized book would require Tardis-like technology--which would be cool--or microscopic fonts--which wouldn't.

## What do we mean by *HTML5*?

This might sound like a silly question, but there is an increasing tendency amongst standards pundits to lump all exciting new web technologies into a box labeled HTML5. So, for example, we've seen SVG (Scalable Vector Graphics) referred to as "one of the HTML5 family of technologies," even though it's an independent W3C *graphics* spec that's 6 years old.

Further confusion arises from the fact that the official W3C spec is something like an amoeba: Bits split off and become their own specifications, such as Web Sockets or Web Storage (albeit from the same Working Group, with the same editors).

So what we mean in this book is "HTML5 and related specifications that came from the WHATWG" (more about this exciting acronym soon). We're also bringing a "plus one" to the party -Geolocation -which has nothing to do with our definition of HTML5, but we include simply for the reason that it's really cool, we're excited about it, and it's part of the New Wave of Exciting Technologies for Making Web Apps.

## Who? What? When? Why? A short history of HTML5

History sections in computer books usually annoy us. You don't need to know about ARPANET or the history of HTTP to understand how to write a new language.

Nonetheless, it's useful to understand how HTML5 came about, because it will help you understand why some aspects of HTML5 are as they are, and hopefully pre-empt (or at least soothe) some of those "WTF? Why did they design it like *that*?" moments.

### How HTML5 nearly never was

In 1998, the W3C decided that they would not continue to evolve HTML. The future, they believed (and so did your authors) was XML. So HTML was frozen at version 4.01 and a specification was released called XHTML, which was an XML version of HTML requiring XML syntax rules like quoting attributes, closing some tags while self-closing others, and the like. Two flavours were developed (well, actually three, if you care about HTML Frames, but we hope you don't because they're gone from HTML5). There was XHTML Transitional, which was designed to help people move to the gold standard of XHTML Strict.

This was all tickety-boo--it encouraged a generation of developers (or at least the professional-standard developers) to think about valid, well-structured code. However, work then began on a specification called XHTML 2.0, which was a revolutionary change to the language, in the sense that it broke backwardscompatibility in the cause of becoming much more logical and better-designed.

A small group at Opera, however, was not convinced that XML was the future for all web authors. Those individuals began extracurricular work on a proof-of-concept specification that extended HTML forms without breaking backward-compatibility. That spec eventually became Web Forms 2.0, and was subsequently folded into the HTML5 spec. They were quickly joined by individuals from Mozilla and this group, led by Ian "Hixie" Hickson, continued working on the specification privately with Apple "cheering from the sidelines" in a small group that called itself the WHATWG (Web Hypertext Application Technology Working Group, [www.whatwg.org](http://www.whatwg.org)). You can see this genesis still in the copyright notice on the WHATWG version of the spec "© Copyright 2004–2009 Apple Computer, Inc., Mozilla Foundation, and Opera Software ASA (note that you are licensed to use, reproduce, and create derivative works)."
Hickson moved from Opera to Google, where he continued to work full-time as editor of HTML5 (then called Web Applications 1.0).

In 2006 the W3C decided that they had perhaps been overoptimistic in expecting the world to move to XML (and, by extension, XHTML 2.0): "It is necessary to evolve HTML incrementally. The attempt to get the world to switch to XML, including quotes around attribute values and slashes in empty tags and namespaces, all at once didn't work." [said Tim Berners-Lee](http://dig.csail.mit.edu/breadcrumbs/node/166).

The resurrected HTML Working Group voted to use the WHATWG's Web Applications spec as the basis for the new version of HTML, and thus began a curious process whereby the same spec was developed simultaneously by the W3C (co-chaired by Sam Ruby of IBM and Chris Wilson of Microsoft, and latterly Ruby, Paul Cotton of Microsoft and Maciej Stachowiak of Apple), and the WHATWG, under the continued editorship of Hickson.
The process has been highly unusual in several respects. The first is the extraordinary openness; anyone could join the WHATWG mailing list and contribute to the spec. Every email was read by Hickson or the core WHATWG team (which included such luminaries as the inventor of JavaScript and Mozilla CTO Brendan Eich, Safari and WebKit Architect David Hyatt, and inventor of CSS and Opera CTO Håkon Wium Lie).

{{aside

# In search of the Spec

Because the HTML5 specification is being developed by both the W3C and WHATWG, there are different versions of the spec.

[http://www.w3.org/TR/html5/](http://www.w3.org/TR/html5/) is the official W3C snapshot, while [http://dev.w3.org/html5/spec/](http://dev.w3.org/html5/spec/) is the latest editor's draft and liable to change.

For the WHATWG version, go to [http://whatwg.org/html5](http://whatwg.org/html5) but beware: this is titled "HTML5 (including next generation additions still in development)" and there are hugely experimental ideas in there such as the `<device>` element. Don't assume that because it's in this document it's implemented anywhere or even completely thought out yet. This spec does, however, have useful annotations about implementation status in different browsers.

There's a one-page version of the complete WHATWG specifications called "Web Applications 1.0" that incorporates everything from the WHATWG at [http://www.whatwg.org/specs/web-apps/current-work/complete.html](http://www.whatwg.org/specs/web-apps/current-work/complete.html) but it might kill your browser as it's massive with many scripts.

Confused? [http://wiki.whatwg.org/wiki/FAQ](http://wiki.whatwg.org/wiki/FAQ#What_are_the_various_versions_of_the_spec.3F) lists and describes these different versions.

Geolocation is not a WHATWG spec and lives at [http://www.w3.org/TR/geolocation-API/](http://www.w3.org/TR/geolocation-API/)

}}

Good ideas were implemented and bad ideas rejected, regardless of who the source was or who they represented, or even where those ideas were first mooted. Good ideas were adopted from Twitter, blogs, IRC.

In 2009, the W3C stopped work on XHTML 2.0 and diverted resources to HTML5 and it was clear that HTML5 had won the battle of philosophies: purity of design, even if it breaks backwards-compatibility, versus pragmatism and "not breaking the Web." The fact that the HTML5 working groups consisted of representatives from all the browser vendors was also important. If vendors were unwilling to implement part of the spec (such as Microsoft's unwillingness to implement `<dialog>`, or Mozilla's opposition to `<bb>`) it was dropped; Hickson [has said](http://www.webstandards. org/2009/05/13/interview-with-ian-hickson-editor-of-the-html5-specification/) "The reality is that the browser vendors have the ultimate veto on everything in the spec, since if they don't implement it, the spec is nothing but a work of fiction". Many participants found this highly distasteful: Browser vendors have hijacked "our Web," they complained with some justification.

It's fair to say that the working relationship between W3C and WHATWG has not been as smooth as it could be. The W3C operates a consensus-based approach, whereas Hickson continued to operate as he had in the WHATWG--as benevolent dictator (and many will snort at our use of the word *benevolent* in this context). It's certainly the case that Hickson had very firm ideas of how the language should be developed.

### The philosophies behind HTML5

Behind HTML5 is a series of [stated design principles](http://www.w3.org/TR/html-design-principles). There are three main aims to HTML5:

* Specifying current browser behaviours that are interoperable
* Defining error handling for the first time
* Evolving the language for easier authoring of web applications

### Not breaking existing Web pages

Many of our current methods of developing sites and applications rely on undocumented (or at least unspecified) features incorporated into browsers over time. For example, `XMLHttpRequest` (XHR) powers untold numbers of Ajax-driven sites.

It was invented by Microsoft, and subsequently reverseengineered and incorporated into all other browsers, but had never been specified as a standard (Anne van Kesteren of Opera finally specified it as part of the WHATWG). Such a vital part of so many sites left entirely to reverse-engineering! So one of the first tasks of HTML5 was to document the undocumented, in order to increase interoperability by leaving less to guesswork for web authors and implementors of browsers.

It was also necessary to unambiguously define how browsers and other user agents should deal with invalid markup. This wasn't a problem in the XML world; XML specifies "draconian error handling" in which the browser is required to stop rendering if it finds an error. One of the major reasons for the rapid ubiquity and success of the Web (in our opinion) was that even bad code had a fighting chance of being rendered by some or all browsers. The barrier to entry to publishing on the Web was democratically low, but each browser was free to decide how to render bad code. Something as simple as `<b><i>Hello mum!</b></i>` (note the mismatched closing tags) produces different DOMs in different browsers. Different DOMs can cause the same CSS to have a completely different rendering, and they can make writing JavaScript that runs across browsers much harder than it need be. A consistent DOM is so important to the design of HTML5 that the language itself is defined in terms of the DOM.

> There is an HTML5 spec that deals with just the aspects relevant to web authors, [generated automatically](http://dev.w3.org/html5/markup/) from the main source.

In the interests of greater interoperability, it's vital that error handling be identical across browsers, thus generating the exact same DOM even when confronted with broken HTML. In order for that to happen, it was necessary for someone to specify it. As we said, the HTML5 specification is well over 900 pages long if printed out, but only 300 or so of those are of relevance to web authors (that's you and us); the rest of it is for implementors of browsers, telling them *exactly* how to parse markup, even bad markup.

### Web applications

An increasing number of sites on the Web are what we'll call web applications; that is, they mimic desktop apps rather that traditional static text-images-links documents that make up
the majority of the Web. Examples are online word processors, photo editing tools, mapping sites, etc. Heavily powered by JavaScript, these have pushed HTML 4 to the edge of its capabilities. HTML5 specifies new DOM APIs for drag and drop, server-sent events, drawing, video, and the like. These new interfaces that HTML pages expose to JavaScript via objects in the DOM make it easier to write such applications using tightly specified standards rather than barely documented hacks.

Even more important is the need for an open standard (free to use and free to implement) that can compete with proprietary standards like Adobe Flash or Microsoft Silverlight. Regardless of what your thoughts are on those technologies or companies, we believe that the Web is too vital a platform for society, commerce, and communication to be in the hands of one vendor. How differently would the renaissance have progressed if Caxton held a patent and a monopoly on the manufacture of printing presses?

### Don't break the Web

There are exactly umpty-squillion web pages already out there, and it's imperative that they continue to render. So HTML5 is (mostly) a superset of HTML 4 that continues to define how browsers should deal with legacy markup such as `<font>`, `<center>`, and other such presentational tags, because millions of web pages use them. But authors should not use them, as they're obsolete. For web authors, semantic markup still rules the day, although each reader will form her own conclusion as to whether HTML5 includes enough semantics, or too many elements.

As a bonus, HTML5's unambiguous parsing rules should ensure that ancient pages will work interoperably, as the HTML5 parser will be used for all HTML documents. (No browser yet ships with an HTML5 parser by default, although at time of writing Firefox has an *experimental* HTML5 parser that can be switched on from about:config by changing the preference html5.enable to true.)

### What about XML?

HTML5 is not an XML language (it's not even an SGML language, if that means anything important to you). It *must* be served as text/html. If, however, you need to use XML, there is an XML serialisation called XHTML5. This allows all the same features, but (unsurprisingly) requires a more rigid syntax (if you're used to coding XHTML, this is exactly the same as you already write). It must be well-formed XML and it must be served with an XML MIME type, even though Internet Explorer 8 and its antecedents can't process it (it offers it for downloading rather than rendering it). Because of this, we are using HTML rather than XHTML syntax in this book.

### HTML5 support

HTML5 is moving very fast now, and even though the spec went to first final draft in October 2009, browsers were already implementing HTML5 support (particularly around the APIs) before this date. Equally, HTML5 support is going to continuously increase as the browsers start rolling out the features.
This book has been written between November 2009 and May 2010. We've already amended chapters several times to take into account changes in the specification, which is looking (dare we say it?) pretty stable now. (We will regret writing that, we know!)

Of course, instances where we say "this is only supported in browser X" will rapidly date--which is a good thing.

### Let's get our hands dirty

So that's your history lesson, with a bit of philosophy thrown in. It's why HTML5 sometimes willfully disagrees with other specifications--for backwards-compatibility, it often defines what browsers actually do, rather than what an RFC specifies they ought to do. It's why sometimes HTML5 seems like a kludge or a compromise--it is. And if that's the price we have to pay for an interoperable open Web, then your authors say "*viva* pragmatism!"

Got your seatbelt on?

Let's go.