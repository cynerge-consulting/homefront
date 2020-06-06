# ProjectHomefront

## Running NPM Scripts

Many of the scripts we'll be running are in nested directories.  Here's how to run them:

+ Group scripts - _(Runs all of the similar scripts in the nested directories)_
  - `npm install`
  - `npm start`
  - `npm test`
  - `npm run lint`
  - `npm run e2e`
  - `npm run build`
+ ./webapp (angular application) - _(runs the scripts of the same name in the ./webapp/ directory)_
  - `npm run web:install`
  - `npm run web:ng`
  - `npm run web:start`
  - `npm run web:build`
  - `npm run web:test`
  - `npm run web:lint`
  - `npm run web:e2e`
+ ./api (backend application)
  - tbd

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