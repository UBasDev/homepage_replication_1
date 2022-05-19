# Project Description

This is a limit testing for me and the replica of "https://turkcealtyazi.org/index.php" 100% responsive and dynamic homepage. This is a single HOMEPAGE project which includes many components. I only used Angular13, Json-Server(for fake API) and Tailwind3(for styling). Any UI library or plugin weren't used. I wrote all components my own(like navbar, mobile navbar, carousel, galleries, etc..). This project also includes Service Worker so it will cache all data to your browser and after first opening the project on your browser, then it will pull most of data from your browser because they are cached.

# How can i run this project?
So simple.Download it and open with your IDE(VS Code or something). Go to the terminal and paste "json-server -w data.json -p 8000" and that will run fake API. Then we should open another terminal and paste "npm run start-pwa" and that will run your Angular application. You can reach it via your browser from "http://localhost:8080".

#Last Important Thing!
If you encounter bugs because of the service worker, you can simply paste "ng serve -o" and run Angular application.

# Angular1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
