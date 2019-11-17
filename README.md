# nebular-angular-seed

[![Build Status](https://travis-ci.org/alobaton/nebular-angular-seed.svg?branch=master)](https://travis-ci.org/alobaton/nebular-angular-seed)
[![codecov](https://codecov.io/gh/alobaton/nebular-angular-seed/branch/master/graph/badge.svg)](https://codecov.io/gh/alobaton/nebular-angular-seed)
[![dependencies Status](https://david-dm.org/alobaton/nebular-angular-seed/status.svg)](https://david-dm.org/alobaton/nebular-angular-seed)
[![devDependencies Status](https://david-dm.org/alobaton/nebular-angular-seed/dev-status.svg)](https://david-dm.org/alobaton/nebular-angular-seed?type=dev)

This project is an Angular CLI seed integrated with [Nebular](https://github.com/akveo/nebular) framework.

[Live Demo](https://alobaton.github.io/nebular-angular-seed/nebular-angular-seed/#/)

## How to start?

In order to start the seed use:

```bash
$ git clone https://github.com/alobaton/nebular-angular-seed.git
$ cd nebular-angular-seed

# install the project's dependencies
$ npm install

# watches your files and uses livereload by default
$ npm start
# prod start
$ npm run start.prod

# dev build
$ npm run build
# prod build, will output the production application in `dist/prod`
# the produced code can be deployed (rsynced) to a remote server
$ npm run build.prod
```

## How to test?

In order to test the seed user:
```bash
$ npm run test
```

## Dockerization

The application provides full Docker support. You can use it for both development and production builds and deployments.

Please note that prod and dev are built into their own separate image, which can lead to unexpected differences in the
npm dependencies and the state of the sources in the container, if you are not familiar with Docker. See below.

Please also note that karma tests (`npm test`) are independent from the docker environment.
Even if an angular-seed container is up and running, karma will run in the context of your **local** npm install,
which may differ from that of the container. In fact, the docker containers don't have karma installed at all.

Cypress tests are however fully supported and recommended to test the app served by either the dev or prod docker containers.  

### Development build and deployment

The dev image only contains the npm libraries installed, but not the sources. The sources are mounted at runtime,
via a docker shared volume, which allows for the live-reload feature to work.
 
To start the container, use:

```bash
$ docker-compose -f docker-compose.dev.yml up -d   # optional: --build, see below
```

Now open your browser at http://localhost:4200

### Production build and deployment

The prod image serves the minified app (sources compiles with a minimal set of dependencies), via an Nginx server.
It is self-contained, and can therefore be pushed to a Docker registry to be deployed somewhere else easily.

To start the container, use:

```bash
$ docker-compose -f docker-compose.prod.yml up -d   # optional: --build, see below
```

Now open your browser at http://localhost:4200

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
git remote add upstream https://github.com/alobaton/nebular-angular-seed
git pull upstream master
```

## How to publish to Github Pages?

In order to publish to Github Pages user:

```bash
$ ng build --aot --prod --base-href "https://alobaton.github.io/nebular-angular-seed/"

$ npx ngh --dir=dist/nebular-angular-seed
```

## Contributing

Please see the [CONTRIBUTING](https://github.com/alobaton/nebular-angular-seed/blob/master/CONTRIBUTING.md) file for guidelines.

## Contributors

[<img alt="alobaton" src="https://avatars1.githubusercontent.com/u/9356067?s=460&v=4" width="117">](https://github.com/alobaton)

## License

[MIT](https://github.com/alobaton/nebular-angular-seed/blob/master/LICENSE)
