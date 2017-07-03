<a><img style="float: right;" height="100" width="100 " src="Camels.Web/favicon.ico"></a>
# Camels Race

AngularJS Web Application to visualize tasks and milestones in projects. The UI simulates a camels race where the winner represents the most advanced task based on the previous estimations.

The initial data are stored in a JSON file that can be edited trough the application.


## Stack
* Persistence store: JSON file
* Backend: C# WebApi
* Frontend: AngularJS
* CSS, HTML
* Lodash JS

### Build

It is a complete project with a build system focused on AngularJS apps and tightly integrated with other tools commonly used in the AngularJS community:
* powered by [Gulp.js](http://gulpjs.com/)
* test written using [Jasmine](http://jasmine.github.io/) syntax
* test are executed by [Karma Test Runner](http://karma-runner.github.io/0.8/index.html) (integrated with the Gulp.js build)
* build supporting JS, CSS and AngularJS templates minification

## Installation


### Platform & tools
### Get the Code

Either clone this repository or fork it on GitHub and clone your fork:

```
git clone https://github.com/epereztg/Camels.git
cd Camels
```
## Development

### Folders structure
At the top level, the repository is split into a client folder and a server folder.  The client folder contains all the client-side AngularJS application.  The server folder contains a very basic WebApi project that delivers and supports the application.
Within the client folder you have the following structure:
* `node_modules` contains build tasks for Gulp along with other, user-installed, Node packages
* `dist` contains build results
* `app` contains application's sources
...COntinue...



### Continuous testing
You can have gulp (karma) continuously watch for file changes and automatically run all the tests on every change, without rebuilding the distribution files.  This can make the test run faster when you are doing test driven development and don't need to actually run the application itself.

* `cd Camels/Camels.Web`
* Run `npm test`.
* A phantomJs will be launched pointing to [http://localhost:8080/].
* Each time a file changes the tests will be run against each browser.
