# VisualTesting

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

##-----------Details/Steps of Visual Regression Testing using Backstopjs---------------

##Installing backstop js using npm as global dependency

1. Run `npm install -g backstopjs` to install backstopjs as your global dependency
2. cd to your project's directory and run... `backstop init` to initialize a backstop config file
3. Start writing test cases for your application
4. Command to run the test cases `backstop test`
5. For the first time it will tell you that there are no reference to compare.
6. If you feel that the screen shots captured by backstop in the mentioned folder are accureate and you want to set them as reference then Run `backstop approve`
7. If you feel something is wrong then don't run `backstop approve` instead make changes and run  `backstop test` again
8. Run  `backstop approve` only when you are sure that the sceenshots should be set as a reference for your application. 
4. Enjoy!!!!!!!!!!
