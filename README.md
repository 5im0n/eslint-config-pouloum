# eslint-config-pouloum

[![npm](https://img.shields.io/npm/v/eslint-config-pouloum.svg)](https://www.npmjs.com/package/eslint-config-pouloum)
[![devDependency Status](https://david-dm.org/5im0n/eslint-config-pouloum.svg?style=flat)](https://david-dm.org/5im0n/eslint-config-pouloum#info=dependencies)

A set of configurable [ESLint][1] configurations used by meticulous people.
Inspire by [Meetic][4] configuration


## Installation

Install this config package

```bash
$ npm install --save-dev eslint-config-meetic
```
*Don't worry about ESLint module, it comes as dependency*


## Usage

This set of configs is meant to be extended on a per-project basis as necessary
using ESLint's [shareable configs][2] feature.

This package includes the following configurations:

- `pouloum` - The default ES5 config
- `pouloum/configurations/es6` - The default ES6 config
- `pouloum/configurations/server` - The default sever (node) config


The default configuration assumes ECMAScript-5. To extend a config in ESLint
just add the extends attribute to your `.eslintrc`:

```json
{
  "extends": "pouloum"
}
```

If your project is written in ECMAScript-6, you can extend with the ES6 subset
of configuration:

```json
{
  "extends": [
    "pouloum",
    "pouloum/configurations/es6"
  ]
}
```

If the default configurations does not suit you, you can easily override it

```js
{
  "extends": [
    "pouloum"
  ],
  "rules": {
    // Override rule
    "no-magic-numbers": 0
  }
}
```

You may have to set `env` and `globals` variables depending on your project



## Licence

The [MIT Licence][3] (MIT)


[1]: http://eslint.org/
[2]: http://eslint.org/docs/developer-guide/shareable-configs
[3]: https://opensource.org/licenses/MIT
[4]: https://github.com/Meetic/eslint-config-meetic
