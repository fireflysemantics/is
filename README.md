[![Build Status](https://travis-ci.org/fireflysemantics/is.svg?branch=master)](https://travis-ci.org/fireflysemantics/is)

# @fireflysemantics/is

Typescript type testing and validation library.  See [API](https://fireflysemantics.github.io/is/doc/modules/_is_.html) for all methods provided.

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


## API Documentation

See [Typedoc API Documentation](https://fireflysemantics.github.io/is/doc/modules/_is_.html).