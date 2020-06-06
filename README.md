# ProjectHomefront

## Configuration Setup
+ `config/default.json`
  - stored in repository
  - lists all configuration options and their defaults
  - changes every configurable thing
+ `config/local.json`
  - specified in .gitignore
  - contains all the secrets (and deployment-specific stuff like urls)
  - overrides `config/default.json`
+ `config/<named-config>.json`
  - stored in repository
  - contains no secrets
  - changes functional things like RAM usage, security settings, debug booleans, etc
  - overrides `config/default.json`
+ `.env`
  - specified in .gitignore
  - contains as little information as possible
  - primarily used to switch between named configurations.

Tools like Jenkins or AutoDeploy should write to the files `config/local.json` and `.env` with the secrets and deployment variables.  `config/default.json` should contain default information for local developer deployments.

---

## Angular Tools
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

+ Development server
  - Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

+ Code scaffolding
  - Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

+ Build
  - Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

+ Running unit tests
  - Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

+ Running end-to-end tests
  - Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

+ Further help
  - To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
