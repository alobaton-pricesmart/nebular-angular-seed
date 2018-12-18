# theme-module

Module for nebular theme libraries.

## Import module

```
const IMPORTS_NB_MODULES = [
  ...
  NbDatepickerModule.forRoot(),
  ...
];

const EXPORTS_NB_MODULES = [
  ...
  NbDatepickerModule,
  ...
];

const NB_THEME_PROVIDERS = [
    ...
    ...NbDatepickerModule.forRoot().providers,
    ...
];
```


