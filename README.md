[![Circle CI](https://circleci.com/gh/shebson/backbone-browserify.png?style=shield)](https://circleci.com/gh/shebson/backbone-browserify)
[![Dependency Status](https://david-dm.org/shebson/backbone-browserify.png)](https://david-dm.org/shebson/backbone-browserify)

Backbone + Browserify Webapp Template
=================================================

This project provides basic boilerplate for creating a single-page webapp with Backbone, Handlebars, Less and
Browserify. It also provides for unit testing and linting, and includes a simple development server with live reloading,
so you can get up and running quickly.

This stack and structure has worked well for me, but that's all it is. For almost every choice in this boilerplate,
there's a good argument for an alternative (whether it's a different task runner, module loader, client-side framework,
CSS pre-processor, etc.); I won't claim that this structure is the best, but I think it's a decent starting point for
large client-side projects.


Setup
--------------------

Make sure you have [Node](http://nodejs.org/) installed on your system. You also need to have
`grunt-cli` installed globally:

    $ npm install -g grunt-cli

Clone this repo to a local directory and run `npm install` to install dependencies:

    $ git clone git@github.com:shebson/backbone-browserify.git
    $ cd backbone-browserify
    $ npm install


Running the Development Server
---------------------------------

Run the development server:

    $ grunt server

That's it! Your app is now running on port 7070. To see it, just open it in your browser:

    $ open http://localhost:7070

Grunt will watch your src directory for changes and recompile as needed, triggering a refresh in your browser.


Organization
--------------------

The Backbone project is stored in the `src/js` directory. LESS is stored in `src/less`. Static assets like images are
located in `src/public`, the contents of which are copied directly into the root of each build without preprocessing.

Grunt configuration is returned by `config/get-config.js`, which in turn requires task-specific configuration files
stored in the `config` directory. Unit tests are included in the `test` directory (see below).

When Grunt, Browserify and Less compile the application, the result is stored in a subdirectory of the `build` directory
(which is ignored by git). Builds for the development server are stored in `build/dev/`, builds for unit testing are in
`build/test/`, and builds for deploying to production or staging are in `build/deploy/`. You shouldn't have to worry
much about the contents of the `build` directory because a local server, unit testing, and automated deployments to S3
are all included in the boilerplate.


Testing and Linting
----------------------
This boilerplate includes linting via Grunt-JSLint and testing using mocha and testem. Run `npm test` to run all tests
provided in the `test` directory using PhantomJS and to JSLint the application code (including all tests and
configuration). This works with many CI services, including CircleCI, without any additional configuration.

Additionally, you may opt to install Testem globally by running `npm install testem -g`. Doing so makes it easy to run
Testem in TDD mode by running `testem` in the project directory.


Deploying to Production and Staging
--------------------------------------

You have a great deal of flexibility about how to serve your app in production. With no additional configuration,
`grunt compile-deploy` generates the `build/deploy` directory. You could serve the contents of the `build/deploy`
directory from Nginx or Apache, or upload the files to Amazon S3 or any other static host.

To make life easier, Grunt tasks for deploying to Amazon S3 are optionally included if you provide
`config/aws-credentials.js`. This file is gitignored because credentials should not be included in a public
repo, but an example is included in `config/aws-credentials-example.js`.

If you elect to provide `config/aws-credentials.js`, the `credentials` object and a `region` are mandatory properties.
Optionally, you may also include `buckets.production` and/or `buckets.staging`. Providing `buckets.production` enables
automated deployment to production via `grunt deploy`, and providing `buckets.staging` does the same for your staging
environment via `grunt stage`.