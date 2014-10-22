Backbone + Browserify Webapp Template
=================================================

This project provides basic boilerplate for creating a single-page webapp with Backbone, Handlebars, Less and
Browserify. It also provides a simple development server, so you can get up and running almost instantly.

Get up and running
--------------------

Make sure you have [Node](http://nodejs.org/) installed on your system. You also need to have
`grunt-cli` installed globally:

    $ npm install -g grunt-cli

Clone this repo to a local directory and run `npm install` to install dependencies:

    $ git clone git@github.com:shebson/backbone-browserify.git
    $ cd backbone-browserify
    $ npm install

Run the development server:

    $ grunt server

That's it! Your app is now running on port 7070. To see it, just open it in your browser:

    $ open http://localhost:7070

Grunt will watch your src directory for changes and recompile as needed, triggering a refresh in your browser.


Organization
--------------------

The project source is stored in the `src` directory. When grunt and browserify compiles your application, the result is
stored in the `build` directory (which is ignored by git).

Deploying to Production
------------------------

You have a great deal of flexibility about how to serve your app in production. You could upload the contents of the build
directory to a static origin like Amazon S3, or you could easily add them to an existing application served by Nginx or
Apache. Whatever you use as an origin, the contents of the build directory are prime candidates for a CDN and aggressive
client-side cacheing.
