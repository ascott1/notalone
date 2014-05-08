# NotAlone
This is the source code for [notalone.gov](https://notalone.gov).

## How it works
NotAlone is a static HTML/CSS/JS site. The site's pages are maintained in simple [Markdown](https://help.github.com/articles/markdown-basics) files, which are compiled into HTML by [Jekyll](http://jekyllrb.com/).

The site navigation and lists of resources that appear on the `/resources` page are maintained in easy-to-read YAML files (".yml") in the `/_data` directory.

GitHub is our CMS for this project. Content editors have GitHub accounts, edit the Markdown and YAML files themselves, and preview the results on a [github.io](https://github.io) page. Pushes to the live server are, for now, handled by the development team.

The site's interactive features (the Crisis Service Locator, the Enforcement Map, and Search) are all JavaScript components, making Ajax ([CORS](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing)) calls to external data sources. Search is powered by [Beckley](https://github.com/18f/beckley). The curated list of searchable resources is in `/_data`.

### Compiling and publishing changes
We depend on a few Ruby gems:

* `gem install jekyll`
* `gem install kramdown`
* `gem install psych -- --enable-bundled-libyaml`

To keep our code updating continuously as we edit, we use `jekyll serve --watch --baseurl:""`. Markdown and YAML editing happens in the `gh-pages` branch, so the [preview page](https://18f.github.io/notalone) is automatically updated as we commit edits. The static compiled HTML is updated into the `master` branch. To generate the static files and push them to `master`, we run `rake publish`. (See the `Rakefile` in the root directory for details on how this works.)


## Contributing
Content and feature suggestions are welcome via GitHub Issues. Code contributions are welcome via pull request, although of course we cannot guarantee your changes will be included in the site.

## License
<p xmlns:dct="http://purl.org/dc/terms/" xmlns:vcard="http://www.w3.org/2001/vcard-rdf/3.0#">
  <a rel="license"
     href="http://creativecommons.org/publicdomain/zero/1.0/">
    <img src="http://i.creativecommons.org/p/zero/1.0/88x31.png" style="border-style: none;" alt="CC0" /></a>
  <br /><br />
  To the extent possible under law,
  <a rel="dct:publisher"
     href="http://18f.gsa.gov">
    <span property="dct:title">18F</span></a>
  has waived all copyright and related or neighboring rights to this work.
This work is published from:
<span property="vcard:Country" datatype="dct:ISO3166"
      content="US" about="http://18f.gsa.gov">
  United States</span>.
</p>
