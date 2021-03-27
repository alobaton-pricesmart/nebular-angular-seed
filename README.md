# nebular-angular-seed

[![Build Status](https://travis-ci.org/alobaton/nebular-angular-seed.svg?branch=master)](https://travis-ci.org/alobaton/nebular-angular-seed)
[![codecov](https://codecov.io/gh/alobaton/nebular-angular-seed/branch/master/graph/badge.svg)](https://codecov.io/gh/alobaton/nebular-angular-seed)
[![dependencies Status](https://david-dm.org/alobaton/nebular-angular-seed/status.svg)](https://david-dm.org/alobaton/nebular-angular-seed)
[![devDependencies Status](https://david-dm.org/alobaton/nebular-angular-seed/dev-status.svg)](https://david-dm.org/alobaton/nebular-angular-seed?type=dev)


This project is an Angular CLI seed integrated with [Nebular](https://github.com/akveo/nebular) framework.

[Live Demo](https://alobaton.github.io/nebular-angular-seed/nebular-angular-seed/#/)

## How to start?

Clone the repository:
```bash
$ git clone https://github.com/alobaton/nebular-angular-seed.git
$ cd nebular-angular-seed/nebular-angular-seed
```

Install the project's dependencies
```bash
$ npm install
```

In order to start the seed use:
```bash
$ npm start
```

To build the application execute:
```bash
$ npm run build
```

## How to test?

To test the project use:
```bash
$ npm run test
```

## Dockerization

### Production build and deployment

The prod image serves the minified app (sources compiles with a minimal set of dependencies), via an Nginx server.
It is self-contained, and can therefore be pushed to a Docker registry to be deployed somewhere else easily.


To start the container use:
```bash
$ docker-compose -f docker-compose.prod.yml up -d   # optional: --build, see below
```

Open your browser at http://localhost:4200

### Updating dependencies and sources
If you are not already familiar with Docker, please note that for both Dev and Prod docker environments, updates to
npm dependencies will be visible only after re-building the image and restarting a new container from it.

In Dev environment, this only applies to npm dependencies, since the sources are mounted as a shared directory.
In Prod environment, this applies to any change in the project.

To force docker-compose to rebuild the image before starting the container, use the --build flag:

```bash
$ docker-compose -f docker-compose.dev.yml up -d --build
```

## How to update?
```
$ git remote add upstream https://github.com/alobaton/nebular-angular-seed
$ git pull upstream master
```

## How to publish to Github Pages?

In order to publish to Github Pages user:

```bash
$ ng build --aot --prod --base-href "https://alobaton.github.io/nebular-angular-seed/"
$ npx ngh --dir=dist/nebular-angular-seed
```

## Contributors

[<img alt="alobaton" src="https://avatars1.githubusercontent.com/u/9356067?s=460&v=4" width="117">](https://github.com/alobaton)

## Change Log

## License

[MIT](https://github.com/alobaton/nebular-angular-seed/blob/master/LICENSE)
