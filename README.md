# Journal Theme

## Overview

This is a simple and clean blog theme for [Hugo](http://gohugo.io/)
based on [vienna](https://github.com/keichi/vienna)

## Installation

In your hugo site directory, run:

```shell
$ git clone https://github.com/roperzh/journal-theme themes/journal-theme
```

## Configuration

You may specify following options in `config.toml` of your site to make use of
this theme's features.

```toml
baseurl = "Your site URL"
languageCode = "en-us"
title = "Your site title"
# Copyright notice. This is displayer in the footer.
copyright = "&copy; Copyright notice"

[params]
    # Social accounts. Link to these accounts are displayed in the header and
    # footer.
    twitter = "Your Twitter username"
    github = "Your GitHub username"
    linkedin = "Your LinkedIn username"
    googleplus = "Your Google+ user id"
    facebook = "Your Facebook username"
    stackoverflow = "Your Stackoverflow user id (number)"
    keybase = "Your keybase.io username"
    instagram = "Your Instagram username"
    # Disqus shortname
    disqus = "Your disqus shortname"
    # Google Analytics API key.
    ga_api_key = "Your Google Analytics tracking id"
    # Mixpanel API key.
    mixpanel_api_key = "Your Mixpanel API key"
    author = "Your Name"
    avatar = "/path/to/avatar"
    contact = "Your contact link (ex. mailto:foo@example.com)"
    bio = "Your short bio"
    # Short subtitle/tagline. This is displayed in the header.
    subtitle = "Short subtitle/tagline of your blog"
    themecolor = "#hexcolor" # Defines the tab color in Chrome for Android.
```

## Development

### Dependencies:

- Node.js
- Grunt.js
- Bower
- libsass

### Getting started

Just clone the project and install the dependencies:

```bash
$ git clone https://github.com/roperzh/journal-theme.git
$ npm install
$ bower install
$ grunt watch
```

Voilà!