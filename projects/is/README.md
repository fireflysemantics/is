# @fireflysemantics/is

Typescript type testing and validation library.  See [API](https://fireflysemantics.github.io/is/doc/modules/_is_.html) for all methods provided.

## Typedoc

[Typedoc](https://fireflysemantics.github.io/is/doc/)

## Build

Run `ng build is` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build is`, go to the dist folder `cd dist/is` and run `npm publish`.

## Blog

- [Application Central Nervous System](https://medium.com/@ole.ersoy/application-central-nervous-system-37aba8e5e899)
- [Angular Application Central Nervous System Brain](https://medium.com/@ole.ersoy/angular-application-nervous-system-brain-685a684f357)

## Usage

We use this library to implement the validation decorators in [@fireflysemantics/validator](https://www.npmjs.com/package/@fireflysemantics/validator).  The functions can also be used to add semantic meaning to your test cases using [NPM Assert](https://www.npmjs.com/package/assert) or Jest and the same goes for general boolean logic in your source code.

For example instead of:
```ts
import { ok } from "assert";
ok(decorator != null, "The decorator is not null or undefined"); 
```

Use:
```ts
import { ok } from "assert";
import {isDefined} from "@fireflysemantics/is";

ok(isDefined(decorator)); 
```

See the [test cases](https://github.com/fireflysemantics/is/blob/master/src/is.spec.ts).  For additional detail also see the [validator.js test cases](https://github.com/chriso/validator.js/tree/master/test).



## Running unit tests

Run `npm t` to execute the unit tests via [Jest](https://jestjs.io/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
