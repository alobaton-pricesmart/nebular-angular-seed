import { join } from 'path';

import { SeedConfig } from './seed.config';
import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';
    // this.GOOGLE_ANALYTICS_ID = 'Your site's ID';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      { src: 'jquery/dist/jquery.min.js', inject: 'libs' },
      { src: 'lodash/lodash.min.js', inject: 'libs' },
      { src: 'jquery/dist/jquery.min.js', inject: 'libs' },
      { src: 'popper.js/dist/umd/popper.min.js', inject: 'libs' },
      { src: 'bootstrap/dist/js/bootstrap.min.js', inject: 'libs' },
      { src: 'bootstrap/dist/css/bootstrap.min.css', inject: true },
      { src: '@nebular/theme/styles/prebuilt/default.css', inject: true },
      { src: '@nebular/theme/styles/prebuilt/corporate.css', inject: true },
      { src: '@nebular/theme/styles/prebuilt/cosmic.css', inject: true },
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      {
        src: `${this.LIBS_SRC}/fontawesome-free-5.5.0-web/css/all.css`,
        inject: true,
        vendor: false
      },
      {
        src: `${this.LIBS_SRC}/fontawesome-free-5.5.0-web/js/fontawesome.min.js`,
        inject: true,
        vendor: false
      },
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    this.ROLLUP_INCLUDE_DIR = [
      ...this.ROLLUP_INCLUDE_DIR,
      //'node_modules/moment/**'
    ];

    this.ROLLUP_NAMED_EXPORTS = [
      ...this.ROLLUP_NAMED_EXPORTS,
      //{'node_modules/immutable/dist/immutable.js': [ 'Map' ]},
    ];

    // Add packages (e.g. ng2-translate)
    const additionalPackages: ExtendPackages[] = [
      {
        name: 'lodash',
        path: 'node_modules/lodash/lodash.min.js'
      },
      {
        name: '@ng-bootstrap/ng-bootstrap',
        path: 'node_modules/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.umd.js'
      },
      {
        name: '@fortawesome/angular-fontawesome',
        path: 'node_modules/@fortawesome/angular-fontawesome/bundles/angular-fontawesome.umd.js'
      },
      {
        name: '@fortawesome/fontawesome-svg-core',
        path: 'node_modules/@fortawesome/fontawesome-svg-core/index.js'
      },
      {
        name: 'ng2-smart-table',
        path: 'node_modules/ng2-smart-table/bundles/table.umd.js'
      },
      {
        name: 'ng2-completer',
        path: 'node_modules/ng2-completer/bundles/ng2-completer.umd.js'
      },
      {
        name: '@nebular/auth',
        path: 'node_modules/@nebular/auth/bundles/auth.umd.js'
      },
      {
        name: '@nebular/security',
        path: 'node_modules/@nebular/security/bundles/security.umd.js'
      },
      {
        name: '@nebular/theme',
        path: 'node_modules/@nebular/theme/bundles/theme.umd.js'
      },
      {
        name: '@angular/cdk',
        path: 'node_modules/@angular/cdk/bundles/cdk.umd.js'
      },
      {
        name: '@angular/cdk/a11y',
        path: 'node_modules/@angular/cdk/bundles/cdk-a11y.umd.js'
      },
      {
        name: '@angular/cdk/accordion',
        path: 'node_modules/@angular/cdk/bundles/cdk-accordion.umd.js'
      },
      {
        name: '@angular/cdk/bidi',
        path: 'node_modules/@angular/cdk/bundles/cdk-bidi.umd.js'
      },
      {
        name: '@angular/cdk/coercion',
        path: 'node_modules/@angular/cdk/bundles/cdk-coercion.umd.js'
      },
      {
        name: '@angular/cdk/collections',
        path: 'node_modules/@angular/cdk/bundles/cdk-collections.umd.js'
      },
      {
        name: '@angular/cdk/keycodes',
        path: 'node_modules/@angular/cdk/bundles/cdk-keycodes.umd.js'
      },
      {
        name: '@angular/cdk/layout',
        path: 'node_modules/@angular/cdk/bundles/cdk-layout.umd.js'
      },
      {
        name: '@angular/cdk/observers',
        path: 'node_modules/@angular/cdk/bundles/cdk-observers.umd.js'
      },
      {
        name: '@angular/cdk/overlay',
        path: 'node_modules/@angular/cdk/bundles/cdk-overlay.umd.js'
      },
      {
        name: '@angular/cdk/platform',
        path: 'node_modules/@angular/cdk/bundles/cdk-platform.umd.js'
      },
      {
        name: '@angular/cdk/portal',
        path: 'node_modules/@angular/cdk/bundles/cdk-portal.umd.js'
      },
      {
        name: '@angular/cdk/scrolling',
        path: 'node_modules/@angular/cdk/bundles/cdk-scrolling.umd.js'
      },
      {
        name: '@angular/cdk/stepper',
        path: 'node_modules/@angular/cdk/bundles/cdk-stepper.umd.js'
      },
      {
        name: '@angular/cdk/table',
        path: 'node_modules/@angular/cdk/bundles/cdk-table.umd.js'
      },
      {
        name: '@angular/cdk/text-field',
        path: 'node_modules/@angular/cdk/bundles/cdk-text-field.umd.js'
      },
      {
        name: '@angular/cdk/tree',
        path: 'node_modules/@angular/cdk/bundles/cdk-tree.umd.js'
      },
      {
        name: 'intersection-observer',
        path: 'node_modules/intersection-observer/intersection-observer.js'
      }
    ];

    this.addPackagesBundles(additionalPackages);

    /* Add proxy middleware */
    // this.PROXY_MIDDLEWARE = [
    //   require('http-proxy-middleware')('/api', { ws: false, target: 'http://localhost:3003' })
    // ];

    /* Add to or override NPM module configurations: */
    // this.PLUGIN_CONFIGS['browser-sync'] = { ghostMode: false };

    this.ENABLE_SCSS = true;
  }

}
