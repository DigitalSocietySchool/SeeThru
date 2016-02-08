# SeeThru

This repository contains the AngularJS application for the SeeThru website. It was generated using the Yeoman Angular Generator and uses SASS/Compass for stylesheets.

## Using this project

To use this project, you must first fetch the required dependencies with NPM and bower. Run the following bash commands in the root of this project:

```bash
npm install
bower install
```

Afterwards you can test the application using the provided live reload server by running:
```bash
grunt serve
```

Not all of the required dependencies are within the comment blocks for the grunt build command, resulting in the distributed copy of this site having problems. This can be easily fixed by moving the dependencies to the correct blocks (and bower.json file) which will then be minified and included in the distributed version


## Known issues

There are some known style and usability issues with the front end of this project.
